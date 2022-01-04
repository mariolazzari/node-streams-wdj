const { createServer } = require("http");
const { createReadStream, stat, createWriteStream } = require("fs");
const { promisify } = require("util");

const fileNmae = "./video.mp4";
const fileInfo = promisify(stat);

const sendOGVideo = async (req, res) => {
  const { size } = await fileInfo(fileNmae);
  const { range } = req.headers;

  if (range) {
    let [start, end] = range.replace(/bytes=/, "").split("-");
    start = +start;
    end = end ? +end : size - 1;

    res.writeHead(206, {
      "Content-Range": `bytes ${start}-${end}/${size}`,
      "Accept-Ranges": "bytes",
      "Content-Length": end - start + 1,
      "Content-Type": "video/mp4",
    });

    createReadStream(fileNmae, { start, end }).pipe(res);
  } else {
    res.writeHead(200, {
      "Content-Length": size,
      "Content-Type": "video/mp4",
    });

    createReadStream(fileNmae).pipe(res);
  }
};

createServer(async (req, res) => {
  if (req.method === "POST") {
    req.pipe(res);
    req.pipe(process.stdout);
    req.pipe(createWriteStream("./uopload.file"));
  } else if (req.url === "/og") {
    sendOGVideo(req, res);
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <form enctype="multipart/form-data" method="POST" action="/">
        <input type="file" name="upload-file">
        <button>Upload File</button>
      </form>`);
  }
}).listen(3000, () => console.log("Server running on port 3000"));

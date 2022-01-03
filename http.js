const { createServer } = require("http");
const { createReadStream, stat } = require("fs");
const { promisify } = require("util");

const fileNmae = "./video.mp4";
const fileInfo = promisify(stat);

createServer(async (req, res) => {
  const { size } = await fileInfo(fileNmae);

  res.writeHead(200, {
    "Content-Length": size,
    "Content-Type": "video/mp4",
  });

  createReadStream(fileNmae).pipe(res);
}).listen(3000, () => console.log("Server running on port 3000"));

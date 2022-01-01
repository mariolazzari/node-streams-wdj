const http = require("http");
const { readFile } = require("fs");

const file = "./video.mp4";
const PORT = 3001;

const app = http.createServer((_req, res) => {
  readFile(file, (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    res.writeHead(200, { "Content-Type": "video/mp4" });
    res.end(data);
  });
});

app.listen(PORT, () => console.log("BUFFER running on port", PORT));

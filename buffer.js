const http = require("http");
const { readFile } = require("fs");

const file = "./video.mp4";

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

app.listen(3000, () => console.log("Server running on port 3000"));

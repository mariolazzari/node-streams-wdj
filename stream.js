const http = require("http");
const { createReadStream } = require("fs");

const file = "./video.mp4";

const app = http.createServer((_req, res) => {
  res.writeHead(200, { "Content-Type": "video/mp4" });
  createReadStream(file).pipe(res).on("error", console.error);
});

app.listen(3000, () => console.log("Server running on port 3000"));

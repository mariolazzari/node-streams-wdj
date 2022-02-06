const http = require("http");
const { readFile } = require("fs");
const readEnv = require("./utils/readEnv");

const { PORT, FILE } = readEnv;

const app = http.createServer((_req, res) => {
  readFile(FILE, (err, data) => {
    if (err) {
      console.error(err);
      return res.end(err.message);
    }

    res.writeHead(200, { "Content-Type": "video/mp4" });
    res.end(data);
  });
});

app.listen(PORT, () => console.log("BUFFER running on port", PORT));

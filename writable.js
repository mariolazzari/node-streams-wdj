const { createReadStream, createWriteStream } = require("fs");

const readStrean = createReadStream("./video.mp4");
const writeStream = createWriteStream("./copy.mp4");

readStrean.on("data", chunk => {
  writeStream.write(chunk);
});

readStrean.on("end", () => {
  writeStream.end();
});

readStrean.on("error", err => {
  console.log("ERROR", err);
});

writeStream.on("close", () => {
  console.log("File copied");
});

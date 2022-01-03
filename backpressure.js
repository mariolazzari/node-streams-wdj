const { createReadStream, createWriteStream } = require("fs");

const readStrean = createReadStream("./video.mp4");
const writeStream = createWriteStream("./copy.mp4", {
  highWaterMark: 8192, //* 1024, //* 1024,
});

readStrean.on("data", chunk => {
  // check backpressure
  const result = writeStream.write(chunk);
  if (!result) {
    console.log("backpressure: emit drain event");
    readStrean.pause();
  }
});

readStrean.on("end", () => {
  writeStream.end();
});

readStrean.on("error", err => {
  console.log("ERROR", err);
});

writeStream.on("drain", () => {
  console.log("drain");
  readStrean.resume();
});

writeStream.on("close", () => {
  console.log("File copied");
});

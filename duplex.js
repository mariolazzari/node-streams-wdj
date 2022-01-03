const { PassThrough } = require("stream");
const { createReadStream, createWriteStream } = require("fs");
const Throttle = require("./Throttle");

const readStream = createReadStream("./video.mp4");
const writeStream = createWriteStream("./copy.mp4");

let total = 0;
const duplex = new PassThrough();
const throttle = new Throttle(10);

duplex.on("data", chunk => {
  total += chunk.length;
  console.log("Bytes:", total);
});

readStream.pipe(throttle).pipe(duplex).pipe(writeStream);

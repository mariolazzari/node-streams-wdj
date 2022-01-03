const { PassThrough } = require("stream");
const { createReadStream, createWriteStream } = require("fs");

const readStream = createReadStream("./video.mp4");
const writeStream = createWriteStream("./copy.mp4");

const duplex = new PassThrough();
let total = 0;

duplex.on("data", chunk => {
  total += chunk.length;
  console.log("Bytes:", total);
});

readStream.pipe(duplex).pipe(writeStream);

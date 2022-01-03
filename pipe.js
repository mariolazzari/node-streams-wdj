const { createReadStream, createWriteStream } = require("fs");

const readStrean = createReadStream("./video.mp4");
const writeStream = createWriteStream("./copy.mp4");
const writeStreamTxt = createWriteStream("./file.txt");

readStrean.pipe(writeStream).on("error", console.error);
process.stdin.pipe(writeStreamTxt).on("error", console.error);

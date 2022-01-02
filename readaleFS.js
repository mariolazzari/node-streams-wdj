const { createReadStream } = require("fs");

const readStream = createReadStream("./video.mp4");

readStream.on("data", chunk => {
  console.log("CHUNK size", chunk.length);
});

readStream.on("end", () => {
  console.log("DONE");
});

readStream.on("error", err => {
  console.log("ERROR", err);
  console.error(err);
});

readStream.pause();

// std in
process.stdin.on("data", chunk => {
  const text = chunk.toString().trim();
  if (text === "finish") {
    readStream.resume();
  } else {
    readStream.read();
  }
});

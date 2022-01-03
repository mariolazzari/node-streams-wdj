const { Transform } = require("stream");

class TransformText extends Transform {
  constructor(c) {
    super();
    this.replaceChar = c;
  }

  _transform(chunk, _encoding, callback) {
    const newChunk = chunk.toString().replace(/./g, this.replaceChar);
    this.push(newChunk);
    callback();
  }

  _flush(callback) {
    this.push("more stuff...");
    callback();
  }
}

module.exports = TransformText;

const { Readable } = require("stream");

class StreamFromArray extends Readable {
  constructor(array) {
    super({ encoding: "utf8" });
    this.array = array;
    this.index = 0;
  }

  _read() {
    if (this.index >= this.array.length) {
      this.push(null);
      return;
    }

    const chunk = this.array[this.index];
    // push chunk into stream
    this.push(chunk);
    this.index++;
  }
}

module.exports = StreamFromArray;

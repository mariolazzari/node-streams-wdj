const { Readable } = require("stream");

class StreamFromArray extends Readable {
  constructor(array, mode = false) {
    if (mode) {
      console.log("MODE:  Object");
      super({ objectMode: true });
    } else {
      console.log("MODE: String");
      super({ encoding: "utf8" });
    }
    this.array = array;
    this.index = 0;
  }

  _read() {
    if (this.index >= this.array.length) {
      this.push(null);
      return;
    }

    // push chunk into stream
    const chunk = this.mode
      ? { data: this.array[this.index], index: this.index }
      : this.array[this.index];
    this.push(chunk);
    this.index += 1;
  }
}

module.exports = StreamFromArray;

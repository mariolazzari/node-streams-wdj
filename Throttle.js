const { Duplex } = require("stream");

class Throttle extends Duplex {
  constructor(delay) {
    super();
    this.delay = delay;
  }

  _read() {}

  _write(chunck, _encoding, callback) {
    this.push(chunck);
    setTimeout(callback, this.delay);
  }

  _final() {
    this.push(null);
  }
}

module.exports = Throttle;

const EventEmitter = require("events");
const uuid = require("uuid");

class Logger extends EventEmitter {
  log(msg) {
    // call event
    this.emit("event", { id: uuid.v4(), msg });
  }

  logDynamic(eventName, msg) {
    this.emit(eventName, { id: uuid.v4(), msg });
  }
}

module.exports = Logger;

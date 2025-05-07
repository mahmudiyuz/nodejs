const Event = require("events");

class Logger extends Event {
  log(a, b) {
    this.emit("calculate", a + b);
  }
}

const logger = new Logger();

logger.on("calculate", (data) => {
  console.log(data);
});

logger.log(5, 6);
logger.log(5, 2);

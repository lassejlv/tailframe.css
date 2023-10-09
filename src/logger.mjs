import chalk from "chalk";

/**
 *
 * @param {String} type
 * @param {String} message
 * @returns {void}
 */

export function log(type, message) {
  const types = ["info", "warn", "error", "success"];

  if (!types.includes(type)) {
    throw new Error(
      `The type of log must be one of the following: ${types.join(", ")}`
    );
  } else if (!message) {
    throw new Error("You must provide a message to log.");
  } else {
    const timestamp = `[${new Date().toLocaleTimeString()}]`;
    const coloredTimestamp = chalk.gray(timestamp);
    let coloredType;

    switch (type) {
      case "info":
        coloredType = chalk.blue("info");
        break;
      case "warn":
        coloredType = chalk.yellow("info");
        break;
      case "error":
        coloredType = chalk.red("error");
        break;
      case "success":
        coloredType = chalk.green("success");
        break;
    }

    const coloredMessage = chalk.white(message);
    console.log(`${coloredTimestamp} ${coloredType} ${coloredMessage}`);
  }
}

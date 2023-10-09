import chokidar from "chokidar";
import { spawn } from "child_process";
import { log } from "../src/logger.js";

// Command to run when HTML files change
const commandToRun = "node --no-warnings src/build.js";

// Directory to monitor for HTML file changes
const directoryToWatch = "./src/ui";

const executeCommand = () => {
  const [command, ...commandArgs] = commandToRun.split(" ");

  spawn(command, commandArgs, { stdio: "inherit" });
};

const watcher = chokidar.watch(directoryToWatch, {
  ignored: /node_modules/,
  persistent: true,
});

watcher.on("change", (filePath) => {
  if (filePath.endsWith(".css")) {
    log("info", `File changed: ${filePath}`);
    executeCommand();
  }
});

log("info", `Watching ${directoryToWatch} for changes...`);

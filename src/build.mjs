import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { exec } from "node:child_process";
import performancePackage from "performance-now";
import { log } from "./logger.mjs";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Start timer
const start = performancePackage();

// Directories to search for CSS files
const directoriesToSearch = ["ui", path.join("ui", "components")];

// Array to store file names
const files = [];

// Loop through directories, collect file names, and filter for CSS files
directoriesToSearch.forEach((dir) => {
  const dirPath = path.join(__dirname, dir);
  const dirFiles = fs.readdirSync(dirPath);
  const cssFiles = dirFiles.filter((file) => file.endsWith(".css"));
  files.push(...cssFiles.map((file) => path.join(dir, file)));
});

// Initialize an empty string to store content
let content = "";

// Loop through files, read content, and concatenate
files.forEach((filePath) => {
  const fileContent = fs.readFileSync(path.join(__dirname, filePath), "utf8");
  content += fileContent + "\n";
});

// Write the content to src/dist/ui.css
const dirToPutIn = "src/dist";
if (!fs.existsSync(dirToPutIn)) {
  fs.mkdirSync(dirToPutIn);
}
fs.writeFileSync(path.join(__dirname, "dist/ui.css"), content);

// End timer
const end = performancePackage();

log("success", `Built in ${((end - start) / 1000).toFixed(3)}ms. 🎉`);

// Run tailwindcss
log("info", "Running tailwindcss...");
exec("npm run tailwindcss", (error, stdout, stderr) => {
  if (error) {
    log("error", `Error: ${error.message}`);
    return;
  }
  if (stderr) {
    log("error", `Error: ${stderr}`);
    return;
  }
  log("success", "tailwindcss ran successfully. 🎉");
});

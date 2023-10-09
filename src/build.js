import fs from "fs";
import path from "path";
import { fileURLToPath } from "node:url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

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

console.log("Build successful");

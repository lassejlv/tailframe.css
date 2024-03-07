import fs from "fs"
import path from "path"
import { exec } from "child_process"
import performancePackage from "performance-now"


// Start the timer
const start = performancePackage()

// Directories to search for CSS files
const directoriesToSearch = ["ui", path.join("ui", "components")];

// Array to store file names
const files: string[] = [];

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

// Write content to a new file
const dirOuput = path.join(__dirname, "dist");

if (!fs.existsSync(dirOuput)) {
    fs.mkdirSync(dirOuput);
}

fs.writeFileSync(path.join(__dirname, "dist/ui.css"), content);


// End timer
const end = performancePackage();

console.log(`Compiled components in ${((end - start) / 1000).toFixed(3)}ms. 🎉`);
console.log("Compiling TailwindCSS...")

exec("npm run tailwindcss", (error, stdout, stderr) => {
    if (error) {
        console.error(`Failed to run tailwindcss: ${error.message}`);
        return;
    }

    if (stderr) {
        console.log("TailwindCSS compiled successfully. 🎉")
        return;
    }

    
})
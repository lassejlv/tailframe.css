import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import performancePackage from 'performance-now';
import { $ } from 'bun';
import ora from 'ora';

// Start the timer
const start = Date.now();
const startSpinner = ora('Compiling components...').start();

// Directories to search for CSS files
const directoriesToSearch = ['ui', path.join('ui', 'components')];

// Array to store file names
const files: string[] = [];

// Loop through directories, collect file names, and filter for CSS files
directoriesToSearch.forEach((dir) => {
  const dirPath = path.join(__dirname, dir);
  const dirFiles = fs.readdirSync(dirPath);
  const cssFiles = dirFiles.filter((file) => file.endsWith('.css'));
  files.push(...cssFiles.map((file) => path.join(dir, file)));
});

// Initialize an empty string to store content
let content = '';

// Loop through files, read content, and concatenate
files.forEach((filePath) => {
  const fileContent = fs.readFileSync(path.join(__dirname, filePath), 'utf8');
  content += fileContent + '\n';
});

// Write content to a new file
const dirOuput = path.join(__dirname, 'dist');

if (!fs.existsSync(dirOuput)) {
  fs.mkdirSync(dirOuput);
}

fs.writeFileSync(path.join(__dirname, 'dist/ui.css'), content);

// End timer
const end = Date.now();

startSpinner.succeed(`Compiled components in ${end - start}ms. 🎉`);

const tailwindSpinner = ora('Compiling tailwindcss...').start();

await $`bun run tailwindcss`
  .quiet()
  .then(() => {
    tailwindSpinner.succeed('Compiled tailwindcss. 🎉');
  })
  .catch((error) => {
    tailwindSpinner.fail('Failed to compile tailwindcss. 😢');
    console.error(error);
  });

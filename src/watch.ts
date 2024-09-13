import chokidar from 'chokidar';
import { spawn } from 'child_process';

// Command to run when HTML files change
const commandToRun = 'bun run src/index.ts';

// Directory to monitor for CSS file changes
const directoryToWatch = './src/ui';

const watcher = chokidar.watch(directoryToWatch, {
  // ignore node_modules and .git directories
  ignored: /node_modules|\.git/,
  persistent: true,
});

watcher.on('change', (path) => {
  if (path.endsWith('.css')) {
    console.clear();
    console.log(`> 📃 File ${path} has been changed`);
    console.log('> 🐌 Starting compiler...');

    spawn(commandToRun, { shell: true, stdio: 'inherit' });
  }
});

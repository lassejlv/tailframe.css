package main

import (
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"time"

	"github.com/fsnotify/fsnotify"
)

func main() {
	isWatchMode := len(os.Args) > 1 && os.Args[1] == "watch"

	if isWatchMode {
		fmt.Println("Watching for changes...")
		compile()
		watch()
	} else {
		compile()
	}
}

func watch() {
	watcher, err := fsnotify.NewWatcher()
	if err != nil {
		fmt.Println("Error creating watcher:", err)
		return
	}
	defer watcher.Close()

	// Create a channel to receive events
	done := make(chan bool)

	// Start watching in a goroutine
	go func() {
		for {
			select {
			case event, ok := <-watcher.Events:
				if !ok {
					return
				}
				if event.Op&fsnotify.Write == fsnotify.Write {
					fmt.Println("Modified file:", event.Name)
					compile()
				}
			case err, ok := <-watcher.Errors:
				if !ok {
					return
				}
				fmt.Println("Error:", err)
			}
		}
	}()

	// Add directory to watch
	err = watcher.Add("./ui/components")
	if err != nil {
		fmt.Println("Error adding watch:", err)
		return
	}

	<-done // Block forever
}

func compile() {
	// Your existing compile function remains the same
	start := time.Now()
	fmt.Println("Compiling components...")

	files := []string{}
	var match []string
	var content string
	match, err := filepath.Glob("./ui/components/*.css")
	if err != nil {
		fmt.Println(err)
	}

	for _, file := range match {
		fileContent, err := os.ReadFile(file)
		fileContentToString := string(fileContent)

		if err != nil {
			panic(err)
		}

		content = content + fileContentToString
		files = append(files, file)
	}

	// create dist folder if it doesn't exist
	distExists, err := os.Stat("./dist")
	if os.IsNotExist(err) {
		os.Mkdir("./dist", 0755)
	} else if distExists.IsDir() == false {
		os.Mkdir("./dist", 0755)
	}

	// Write to ./dist/tailframe.build.css
	err = os.WriteFile("./dist/tailframe.build.css", []byte(content), 0644)
	if err != nil {
		panic(err)
	}

	var cmdString string = "action tailwind"

	cmd := exec.Command("bash", "-c", cmdString)
	err = cmd.Run()

	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}

	fmt.Println("Done in", time.Since(start).Milliseconds(), "ms")
}

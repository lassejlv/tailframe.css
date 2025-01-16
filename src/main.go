package main

import (
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"runtime"
	"time"
)

func main() {
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

	// Run "bun run tailwindcss"
	var cmd *exec.Cmd
	var cmdString string = "bun run tailwindcss"

	if runtime.GOOS == "windows" {
		cmd = exec.Command("cmd", "/C", cmdString)
	} else {
		cmd = exec.Command("sh", "-c", cmdString)
	}

	err = cmd.Run()

	if err != nil {
		panic(err)
	}

	fmt.Println("Done in", time.Since(start).Milliseconds(), "ms")
}

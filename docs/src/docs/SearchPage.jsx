import React from "react";
import Sidebar from "../components/Sidebar";

export default function SearchPage() {
  const [files, setFiles] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  React.useEffect(() => {
    fetch("/content/index.json")
      .then((res) => res.json())
      .then((data) => {
        setFiles(data);
      });
  }, []);

  const handleSearch = (e) => {
    // fetch /content/file.md by map all files and filter log resluts
    files.map((file) => {
      fetch(`/content/${file}.md`)
        .then((res) => res.text())
        .then((data) => {
          if (data.includes(search)) {
            console.log("we have a match");
            console.log(data);
          }
        });
    });
  };

  return (
    <Sidebar>
      <div className="flex items-center justify-center space-x-2">
        <input
          type="text"
          placeholder="Search anything, dropdown, navbar..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => handleSearch()}>
          <i className="fas fa-search"></i>
        </button>
      </div>
    </Sidebar>
  );
}

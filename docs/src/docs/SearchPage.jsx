import React from "react";
import Sidebar from "../components/Sidebar";

export default function SearchPage() {
  const [files, setFiles] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  function lowerCase(str) {
    return str.toLowerCase();
  }

  React.useEffect(() => {
    fetch("/content/index.json")
      .then((res) => res.json())
      .then((data) => {
        setFiles(data);
      });
  }, []);

  const handleSearch = (e) => {
    Promise.all(
      files.map((file) => {
        return fetch(`/content/${file}.md`)
          .then((res) => {
            if (!res.ok) {
              throw new Error(`Failed to fetch ${file}`);
            }
            return res.text();
          })
          .then((data) => {
            const contentHead = data.substring(3, data.indexOf("---", 3));

            const lines = contentHead.trim().split("\n");

            // Initialize an empty object to store the properties
            const meta = {};

            lines.forEach((line) => {
              const parts = line.split(":");
              if (parts.length === 2) {
                const key = parts[0].trim();
                const value = parts[1].trim();
                meta[key] = value;
              }
            });

            // Parse the 'keywords' property as JSON
            if (meta.keywords) {
              meta.keywords = JSON.stringify(meta.keywords);
            }

            // remove start " and end "
            let title = (meta.title = meta.title.substring(
              1,
              meta.title.length - 1
            ));

            if (
              lowerCase(title).includes(lowerCase(search)) ||
              meta.tagline.includes(lowerCase(search))
            ) {
              const searchResultItem = {
                title: title,
                tagline: meta.tagline,
              };

              setSearchResults(() => [searchResultItem]);
            }
          })
          .catch((error) => {
            console.error(error);
          });
      })
    );
  };

  return (
    <Sidebar>
      <div className="flex items-center justify-center space-x-2">
        <input
          type="text"
          placeholder="Search anything, dropdown, navbar..."
          onChange={(e) => {
            setSearch(e.target.value);

            handleSearch();
          }}
        />
      </div>

      <div data-results={searchResults.length ?? 0} className="mt-5">
        {searchResults.length > 0 ? (
          <>
            {searchResults.map((result, index) => (
              <div
                key={index}
                className="bg-gray-100 hover:bg-gray-200 rounded-md p-2 transition-colors duration-200 ease-in-out cursor-pointer"
              >
                <h2 className="text-lg font-bold">{result.title}</h2>
                <p>{result.tagline}</p>
              </div>
            ))}
          </>
        ) : (
          <div className="alert" warning>
            No results found for{" "}
            <span className="font-bold">{search ? search : "No search"}</span>
          </div>
        )}
      </div>
    </Sidebar>
  );
}

import React from "react";
import { config } from "../config";
import { Link } from "react-router-dom";

export default function Sidebar(props) {
  return (
    <div className="flex">
      <aside className="sticky top-0 h-screen w-56 bg-gray-50 text-gray-800 p-4">
        <div className="flex items-center mb-4 space-x-1">
          <img
            src="/logo.avif"
            width="30"
            height="30"
            alt="Page logo"
            style={{ aspectRatio: "30 / 30", objectFit: "cover" }}
          />
          <h1 className="text-lg font-medium">Tailframe CSS</h1>
        </div>
        <nav className="space-y-2">
          <div className="flex flex-col space-y-2 mb-5">
            <h1 className="text-sm font-medium mt-5 mb-5">General</h1>

            {config.docs
              .filter((doc) => doc.placement === "top")
              .map((doc) => (
                <Link to={`/docs/${doc.href_data_name}`} key={doc.name}>
                  <button
                    md="true"
                    bold="true"
                    outline="true"
                    className="w-full text-left"
                  >
                    <i className={`${doc.icon} mr-2`}></i>
                    <span className="text-sm font-medium">{doc.name}</span>
                  </button>
                </Link>
              ))}
          </div>

          <hr className="my-4" />
          <div className="flex flex-col space-y-2">
            <h1 className="text-sm font-medium mt-5 mb-5">Components</h1>

            {config.docs
              .filter((doc) => doc.placement === "middle")
              // sort by a-z
              .sort((a, b) => (a.name > b.name ? 1 : -1))
              .map((doc) => (
                <Link to={`/docs/${doc.href_data_name}`} key={doc.name}>
                  <button
                    md="true"
                    bold="true"
                    outline="true"
                    className="w-full text-left"
                  >
                    <i className={`${doc.icon} mr-2`}></i>
                    <span className="text-sm font-medium">{doc.name}</span>
                  </button>
                </Link>
              ))}
          </div>
        </nav>
      </aside>
      <main className="flex-grow p-6">
        <div className="max-w-4xl mx-auto">{props.children}</div>
      </main>
    </div>
  );
}

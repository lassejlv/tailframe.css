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
          <Link to="/docs">
            <button md="true" bold="true" outline="true" className="mb-2">
              <i className="fas fa-book mr-2"></i>
              <span className="text-sm font-medium">Getting Started</span>
            </button>
          </Link>

          {config.docs
            .filter((doc) => doc.placement === "top")
            .map((doc) => (
              <Link to={`/docs/${doc.href_data_name}`} key={doc.name}>
                <button md="true" bold="true" outline="true">
                  <i className={`${doc.icon} mr-2`}></i>
                  <span className="text-sm font-medium">{doc.name}</span>
                </button>
              </Link>
            ))}
        </nav>
      </aside>
      <main className="flex-grow p-6">
        <div className="max-w-4xl mx-auto">{props.children}</div>
      </main>
    </div>
  );
}

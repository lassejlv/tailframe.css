import React from "react";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

export default function DocIndex() {
  return (
    <Sidebar>
      <h1 className="text-3xl mb-2">Documentation</h1>
      <p className="text-gray-400">
        Tailframe supports all Web Frameworks and Libraries. You can use it with
        React, Vue, Angular, Svelte, Ember, Preact, and more. Or just plain
        HTML.
      </p>

      <Link to={"/docs/installation"}>
        <button md="true" bold="true" className="mt-8">
          Go to installation
        </button>
      </Link>
    </Sidebar>
  );
}

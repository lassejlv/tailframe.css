import React from "react";
import { config } from "../config";

export default function Navbar() {
  return (
    <nav className="navbar !flex-col md:!flex-row !space-y-3 md:space-y-0">
      <h1 className="text-2xl mt-3 md:mt-0">Tailframe CSS</h1>

      <ul className="list">
        <li className="item">
          <button md="true" bold="true" hasring="true">
            Documention
          </button>
        </li>
        <li className="item">
          <button
            md="true"
            bold="true"
            hasring="true"
            elegant="true"
            onClick={() => window.location.replace(config.github_repo)}
          >
            <i className="fab fa-github mr-2"></i>View on github
          </button>
        </li>
      </ul>
    </nav>
  );
}

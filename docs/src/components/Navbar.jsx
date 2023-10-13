import React from "react";
import { config } from "../config";

export default function Navbar() {
  return (
    <nav
      className="!flex-col md:!flex-row !space-y-3 md:space-y-0"
      navbar="true"
    >
      <h1 className="text-2xl mt-3 md:mt-0">Tailframe CSS</h1>

      <ul className="list">
        <li className="item">
          <details>
            <summary className="px-4 py-3" bold>
              Select version
            </summary>
            <ul>
              <li>
                <a href="/docs">Latest (v0.0.1)</a>
              </li>
            </ul>
          </details>
        </li>
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

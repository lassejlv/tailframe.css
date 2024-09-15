import { config } from '../config';

export default function Navbar() {
  return (
    <nav className="!flex-col md:!flex-row !space-y-3 md:space-y-0" navbar="true">
      <h1 className="text-2xl mt-3 md:mt-0">Tailframe CSS</h1>

      <ul className="list">
        <li className="item">
          <details>
            <summary className="px-4 py-3 font-bold" bold>
              v0.0.1
            </summary>
            <ul>
              <li>
                <a href="/docs">
                  {' '}
                  <i className="fa-solid fa-angle-right"></i> Latest (v0.0.1)
                </a>
              </li>
              <li>
                <a href="/docs/versions">
                  <i className="fa-solid fa-angle-right"></i>
                  View all versions
                </a>
              </li>
            </ul>
          </details>
        </li>
        <li className="item" onClick={() => (window.location.href = '/docs/search')}>
          <button md="true" bold="true" hasring="true">
            <i className="fas fa-search mr-2"></i>
            Search
          </button>
        </li>
        <li className="item">
          <button md="true" bold="true" hasring="true">
            Documention
          </button>
        </li>
        <li className="item">
          <button md="true" bold="true" hasring="true" elegant="true" onClick={() => window.location.replace(config.github_repo)}>
            <i className="fab fa-github mr-2"></i>View on github
          </button>
        </li>
      </ul>
    </nav>
  );
}

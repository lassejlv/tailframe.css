import { Link } from "react-router-dom";
import "./App.css";
import { config } from "./config.js";

function App() {
  return (
    <>
      <div class="container mx-auto flex flex-col items-center justify-center h-[75vh] md:h-[50vh]">
        <h1 class="text-5xl font-bold mb-2 text-center">
          Make it clean and simple.
        </h1>
        <p class="text-gray-500 text-xl text-center">
          Tailframe is a mordern css libary that comes with beautiful components
          out of the box. <br />
          <b>Build on top of Tailwind CSS ❤️</b>
        </p>

        <div class="mt-5 space-x-2">
          <Link to={"/docs"}>
            <button md="true" bold="true" lg="true">
              <i class="fa-solid fa-angle-right"></i> Get started
            </button>
          </Link>
          <Link to={config.github_repo}>
            <button md="true" bold="true" lg="true" elegant="true">
              <i class="fab fa-github mr-2"></i>Give a star
            </button>
          </Link>
        </div>

        {/* Producthunt logo */}
        <div className="mt-5">
          <a
            href="https://www.producthunt.com/posts/tailframe-css?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-tailframe&#0045;css"
            target="_blank"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=419610&theme=neutral"
              alt="Tailframe&#0032;CSS - A&#0032;&#0060;10KB&#0032;CSS&#0032;library&#0044;&#0032;elegantly&#0032;built&#0032;on&#0032;Tailwind&#0032;CSS&#0046; | Product Hunt"
              style={{ width: "250px", height: "54px" }}
              width="250"
              height="54"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;

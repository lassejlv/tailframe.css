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
      </div>
    </>
  );
}

export default App;

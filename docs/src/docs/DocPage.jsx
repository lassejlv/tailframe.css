import React from "react";
import Sidebar from "../components/Sidebar"; // Import Sidebar component
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export default function DocPage() {
  // get the route path /docs/:id
  const { id } = useParams();
  const [markdown, setMarkdown] = React.useState("");
  const [pageDontExist, setPageDontExist] = React.useState(false);

  React.useEffect(() => {
    fetch(`/content/${id}.md`).then(async (res) => {
      if (res.ok) {
        setMarkdown(await res.text());
      } else {
        setPageDontExist(true);
      }
    });
  }, [id]);

  return (
    <>
      <Sidebar>
        {pageDontExist ? (
          <>
            <h1 className="text-2xl font-medium mb-4">404</h1>
            <p>Page not found</p>
          </>
        ) : (
          <div className="prose">
            <ReactMarkdown children={markdown} />
          </div>
        )}
      </Sidebar>
    </>
  );
}

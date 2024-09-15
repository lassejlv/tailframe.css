import React from 'react';
import Sidebar from '../components/Sidebar'; // Import Sidebar component
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export default function DocPage() {
  // get the route path /docs/:id
  const { id } = useParams();
  const [markdown, setMarkdown] = React.useState('');
  const [pageDontExist, setPageDontExist] = React.useState(false);

  React.useEffect(() => {
    fetch(`/content/${id}.md`).then(async (res) => {
      if (res.ok) {
        const text = await res.text();
        setMarkdown(text.substring(text.indexOf('---', 3) + 3, text.length));
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
            <button
              md="true"
              elegant="true"
              className="mt-4"
              onClick={() => {
                window.location.reload();
              }}
            >
              <i className="fas fa-sync-alt mr-2"></i>
              Refresh page
            </button>
          </>
        ) : (
          <>
            <div className="alert" warn="true">
              <p>This is a work in progress. Stable version will be aviaible in start october.</p>
            </div>
            <div className="prose">
              <ReactMarkdown children={markdown} rehypePlugins={[rehypeRaw]} />
            </div>
          </>
        )}
      </Sidebar>
    </>
  );
}

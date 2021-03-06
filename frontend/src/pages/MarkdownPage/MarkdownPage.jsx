import React, { useState, useEffect } from "react";
import Markdown from "react-remarkable";
import hljs from "highlight.js";
import emoji from "remark-emoji";
import "highlight.js/styles/github-gist.css";
import axios from "redaxios";
import "github-markdown-css";
import SyntaxHighlighter from "react-syntax-highlighter";
// import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

import ReactMarkdown from "react-markdown";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkSlug from "remark-slug";
import remarkToc from "remark-toc";
import remarkGithub from "remark-github";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeReact from "rehype-react";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";
import virtualizedRenderer from "react-syntax-highlighter-virtualized-renderer";
import { nightOwl } from "../../nightOwl";
// virtualized night owl
// atelier-lakeside-light
// atelier-sulphurpool-light
const HYGGE =
  "https://raw.githubusercontent.com/lezzles11/Template/master/frontend/planning/hyggechats.md";
const KELLAN =
  "https://raw.githubusercontent.com/lezzles11/Template/master/frontend/planning/kellan.md";
const OPTEE =
  "https://raw.githubusercontent.com/lezzles11/Template/master/frontend/planning/opteeRedux.md";

const htmlProcessor = unified()
  .use(remarkParse)
  .use(remarkHtml);

const processor = unified()
  .use(remarkParse)
  .use(remarkSlug)
  .use(remarkToc)
  .use(remarkGithub, {
    repository: "rehypejs/rehype-react",
  })
  .use(remarkRehype)
  .use(rehypeReact, { createElement: React.createElement });
const highlight = (str, lang) => {
  if (lang && hljs.getLanguage(lang)) {
    try {
      return hljs.highlight(lang, str).value;
    } catch (err) {
      console.error(err);
    }
  }

  try {
    return hljs.highlightAuto(str).value;
  } catch (err) {
    console.error(err);
  }

  return "";
};

function getURL(url) {
  axios.get(url).then((result) => {
    console.log(result.data);
    return result.data;
  });
}
const REDUX =
  "https://raw.githubusercontent.com/lezzles11/Template/master/frontend/planning/reduxTest.md";
const MarkdownPage = () => {
  const [isLoading, setLoading] = useState(true);
  const [kellan, setKellan] = useState("");
  const [optee, setOptee] = useState("");
  const [hygge, setHygge] = useState("");
  useEffect(() => {
    async function getData() {
      await axios.get(REDUX).then((result) => {
        // console.log(result.data);
        setKellan(result.data);
      });
      await axios.get(OPTEE).then((result) => {
        setOptee(result.data);
      });
      await axios.get(HYGGE).then((result) => {
        setHygge(result.data);
      });
    }
    getData();
    setLoading(false);
    return () => {
      setKellan("");
      setOptee("");
      setHygge("");
    };
  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  console.log(kellan);
  return (
    <div
      className="container font2"
      style={{ textAlign: "left" }}
    >
      <ReactMarkdown
        children={optee}
        remarkPlugins={[remarkGfm, remarkToc]}
        components={{
          p: ({ node, ...props }) => (
            <p
              style={{ color: "black", paddingTop: "1rem" }}
              {...props}
            />
          ),
          pre: ({ node, ...props }) => (
            <span
              style={{
                textAlign: "left",
                marginLeft: "1rem",
              }}
              {...props}
            />
          ),
          span: ({ node, ...props }) => (
            <span
              style={{
                textAlign: "left",
                marginLeft: "1rem",
              }}
              {...props}
            />
          ),
          h3: ({ node, ...props }) => (
            <h3 style={{ marginTop: "3rem" }} {...props} />
          ),
          strong: ({ node, ...props }) => (
            <h5
              style={{
                marginTop: "3rem",
                fontWeight: "bold",
              }}
              {...props}
            />
          ),
          code({
            node,
            inline,
            className,
            children,
            ...props
          }) {
            const match = /language-(\w+)/.exec(
              className || ""
            );
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(
                  /\n$/,
                  ""
                )}
                style={nightOwl}
                language={match[1]}
                // renderer={virtualizedRenderer()}
                PreTag="div"
                {...props}
              />
            ) : (
              <div>
                <SyntaxHighlighter
                  language="javascript"
                  style={nightOwl}
                  //   renderer={virtualizedRenderer()}
                >
                  {children}
                </SyntaxHighlighter>
              </div>
            );
          },
        }}
      />
    </div>
  );
};

export default MarkdownPage;

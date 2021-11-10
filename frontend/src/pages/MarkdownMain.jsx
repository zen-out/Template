import React, { useState, useEffect } from "react";
import Markdown from "react-remarkable";
import hljs from "highlight.js";
import emoji from "remark-emoji";
import "highlight.js/styles/github-gist.css";
import axios from "redaxios";
import "github-markdown-css";

import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkSlug from "remark-slug";
import remarkToc from "remark-toc";
import remarkGithub from "remark-github";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeReact from "rehype-react";
import remarkHtml from "remark-html";
function toHTML(string) {
  const toHTML = unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(string)
    .then((file) => {
      console.log(String(file));
    });
}

const processor = unified()
  .use(remarkParse)
  .use(remarkSlug)
  .use(remarkToc)
  .use(remarkGithub, {
    repository: "rehypejs/rehype-react",
  })
  .use(remarkRehype)
  .use(rehypeHighlight)
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

const MarkdownMain = () => {
  const [readMe, setReadMe] = useState("");
  const [markDown, setMarkDown] = useState({});
  useEffect(() => {
    function getData() {
      axios
        .get(
          "https://raw.githubusercontent.com/AndersonChoi/wedding-card/master/README.md"
        )
        .then((object) => {
          console.log(object.data);
          let processed = processor.processSync(
            object.data
          ).result;

          console.log(typeof processed);
          console.log(processed);
          setMarkDown(processed);
          setReadMe(object.data);
        });
    }
    getData();
  }, []);
  return (
    <div className="markdown-body">
      <Markdown
        source={readMe}
        options={{ highlight, html: true, linkify: true }}
      ></Markdown>
    </div>
  );
};

export default MarkdownMain;

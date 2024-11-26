import markdownit from "markdown-it";
import hljs from "highlight.js";

const markdownIt = markdownit({
  breaks: true,
  linkify: true,
  typographer: true,
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(str, { language: lang }).value;
    }

    return "";
  },
});

export { markdownIt };

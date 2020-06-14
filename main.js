import { routes } from "./store.js";
import { Remarkable } from "https://unpkg.com/remarkable@2.0.0/dist/esm/index.browser.js";

const md = new Remarkable({ html: true });

const getBaseURL = () =>
  window.location.host === "nuuh5.github.io"
    ? "https://cdn.jsdelivr.net/gh/nuuh5/SchulProjektWeb/pages/"
    : "./pages/";

export const body = ({ subs: { route }, self }) => {
  self.css`display: block;
    max-width: 100%;
    width: 800px;
    overflow-x: hidden;
    margin: 20px auto;
    padding: 45px;
    margin-top: 200px;
    margin-bottom: 75px;
    background-color: white;
    box-shadow: 2px 1px 25px -5px rgba(0,0,0,0.75);
      `;

  const script = /.*script: (.*)/;

  fetch(
    `${getBaseURL()}${(Object.values(routes)[route] || {}).name || "index"}.md`
  )
    .then((response) => response.text())
    .then((text) => {
      const s = script.exec(text.split("---")[1]);
      if (s) import(s[1]).then((mod) => mod.default());
      self.innerHTML = md.render(text.split("---")[2]);
    });
};

export const credits = ({ self }) =>
  self.nest("erstellt von Noah Charef & Falk Zwimpfer").css`
  color: white;
  opacity: 0.5;
  padding: 5px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 300;
  float: right;
  `;

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
    padding: 10px;
    `;

  fetch(`${getBaseURL()}${Object.values(routes)[route] || "index"}.md`)
    .then((response) => response.text())
    .then((text) => {
      self.innerHTML = md.render(text.split("---")[2]);
    });
};

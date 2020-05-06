import { routes } from "./store.js";
import { Remarkable } from "https://unpkg.com/remarkable@2.0.0/dist/esm/index.browser.js";

const md = new Remarkable({ html: true });

export const body = ({ subs: { route }, self }) => {
  self.css`display: block;
    max-width: 100%;
    width: 800px;
    overflow-x: hidden;
    margin: 20px auto;
    `;

  fetch(`./pages/${Object.values(routes)[route] || "index"}.md`)
    .then((response) => response.text())
    .then((text) => {
      self.innerHTML = md.render(text.split("---")[2]);
    });
};

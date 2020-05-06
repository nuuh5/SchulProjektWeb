import { Observable } from "https://unpkg.com/comper@0.0.7";

const toHash = (str) =>
  (str || "")
    .split(" ")
    .map((str) => str.replace(/\//g, ""))
    .map((str) => str.replace(/Ü/g, "Ue"))
    .filter((str) => str)
    .join("_");

export const routes = {
  Bilder: "",
  "Über Uns": "ueber",
  Kontakt: "kontakt",
  Programm: "programm",
  "An- / Abmeldung": "",
};

const convertHashToId = (hash) =>
  Object.keys(routes).map(toHash).indexOf(hash.replace("#", ""));

export const store = {
  route: new Observable(convertHashToId(window.location.hash)),
};

store.route.subscribe((index) => {
  window.location.hash = toHash(Object.keys(routes)[index]);
});

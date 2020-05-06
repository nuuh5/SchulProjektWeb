import { Observable } from "https://unpkg.com/comper@0.0.7";

const toHash = (str) =>
  (str || "")
    .split(" ")
    .map((str) => str.replace(/\//g, ""))
    .map((str) => str.replace(/Ü/g, "Ue"))
    .filter((str) => str)
    .join("_");

export const routes = [
  "Bilder",
  "Über Uns",
  "Kontakt",
  "Programm",
  "An- / Abmeldung",
];

const convertHashToId = (hash) =>
  routes.map(toHash).indexOf(hash.replace("#", ""));

export const store = {
  route: new Observable(convertHashToId(window.location.hash)),
};

store.route.subscribe((index) => {
  window.location.hash = toHash(routes[index]);
});

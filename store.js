import { Observable } from "https://unpkg.com/comper@0.0.8";

const toHash = (str) =>
  (str || "")
    .split(" ")
    .map((str) => str.replace(/\//g, ""))
    .map((str) => str.replace(/Ü/g, "Ue"))
    .filter((str) => str)
    .join("_");

export const routes = {
  Bilder: { name: "", icon: "./icons/image.svg" },
  "Über Uns": { name: "ueber", icon: "./icons/help-circle.svg" },
  Kontakt: { name: "kontakt", icon: "./icons/message-square.svg" },
  Programm: { name: "programm", icon: "./icons/calendar.svg" },
  "An- / Abmeldung": { name: "an-abmeldung", icon: "./icons/user-check.svg" },
};

const convertHashToId = (hash) =>
  Object.keys(routes).map(toHash).indexOf(hash.replace("#", ""));

export const store = {
  route: new Observable(convertHashToId(window.location.hash)),
};

store.route.subscribe((index) => {
  window.location.hash = toHash(Object.keys(routes)[index]);
});

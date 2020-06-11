import { routes } from "./store.js";

const logo = new Image();

logo.src = "./logo.svg";
logo.style.float = "right";
logo.style.width = "200px";
logo.style.padding = "15px 0";

export const header = ({ self, store, ID, module }) =>
  self.css`
    display: block;
    width: 100%;
    text-align: center;
    color: white;
    background-color: #293679;
    box-shadow: 0px 0px 30px -10px rgba(0,0,0,0.75);
    position: fixed;
    top: 0;
`.nest(
    module.header.title({ title: "Kadetten Zürich" }),
    ...Object.entries(routes).map(([name, { icon }], index) =>
      module.header.navitem({ name, icon, ...ID(index), index })
    )
  );

export const title = ({ module }) =>
  module.text.bold.extend(({ self, context, store }) =>
    self.nest(context.title, logo).css`
  display: inline-block;
  width: 100%;
  text-align: left;
  font-size: 50px;
  padding: 20px;
  color: white;
`.on({
      click: () => {
        store.route.next(-1);
      },
    })
  );

export const navitem = ({ module }) =>
  module.text.normal.extend(({ subs: { route }, self, context, store }) => {
    const icon = new Image();

    icon.src = context.icon;
    icon.style.position = "relative";
    icon.style.top = "3px";
    icon.style.paddingRight = "5px";
    // icon.style.padding = "15px 0";

    self.nest(icon, context.name).css`
    padding: 10px;
    font-size: 23px;
    border-bottom: ${context.index === route ? "2px solid white" : "none"};
    color: white;
    `.on({
      click: () => {
        store.route.next(context.index);
      },
    });
  });

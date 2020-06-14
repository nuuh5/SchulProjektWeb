import { routes } from "./store.js";

const logo = new Image();

logo.src = "./logo.svg";
logo.style.float = "right";
logo.style.width = "200px";
logo.style.padding = "15px 0";

export const header = ({ self, subs: { showHidden }, store, ID, module }) =>
  self.css`
    display: block;
    width: 100%;
    text-align: center;
    color: white;
    background-color: #293679;
    box-shadow: 0px 0px 30px -10px rgba(0,0,0,0.75);
    position: fixed;
    top: 0;
    z-index: 1;
`.nest(
    module.header.title({ title: "Kadetten Zürich" }),
    ...Object.entries(routes).map(([name, { icon, hidden }], index) =>
      module.header.navitem({ hidden, name, icon, ...ID(index), index })
    ),
    module.header.show()
  );

export const show = ({ self, subs: { showHidden }, store }) => {
  const icon = new Image();

  icon.src = showHidden ? "./icons/x.svg" : "./icons/more-horizontal.svg";
  icon.style.position = "relative";
  icon.style.top = "3px";
  icon.style.paddingRight = "5px";

  if (self.children[0]) self.children[0].remove();

  self.appendChild(icon);

  self.css`
  color: white;
  `.on({
    click: () => {
      store.showHidden.next(!showHidden);
    },
  });
};
export const title = ({ module }) =>
  module.text.bold.extend(({ self, context, store }) =>
    self.nest(context.title, logo).css`
  display: inline-block;
  width: 100%;
  text-align: left;
  font-size: 50px;
  padding: 0 20px;
  color: white;
`.on({
      click: () => {
        store.route.next(-1);
      },
    })
  );

export const navitem = ({ module }) =>
  module.text.normal.extend(
    ({ subs: { route, showHidden }, self, context, store }) => {
      const icon = new Image();

      icon.src = context.icon;
      icon.style.position = "relative";
      icon.style.top = "3px";
      icon.style.paddingRight = "5px";
      // icon.style.padding = "15px 0";

      self.nest(icon, context.name).css`
    display: ${showHidden || !context.hidden ? "inline-block" : "none"};
    padding: 10px;
    font-size: 23px;
    border-bottom: ${context.index === route ? "2px solid white" : "none"};
    color: white;
    `.on({
        click: () => {
          store.route.next(context.index);
        },
      });
    }
  );

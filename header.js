import { routes } from "./store.js";

export const header = ({ self, store, ID, module }) =>
  self.css`
    display: block;
    width: 100%;
    text-align: center;
`.nest(
    module.header.title({ title: "Kadetten Zürich" }),
    ...Object.keys(routes).map((name, index) =>
      module.header.navitem({ name, ...ID(index), index })
    )
  );

export const title = ({ module }) =>
  module.text.bold.extend(({ self, context, store }) =>
    self.nest(context.title).css`
  display: block;
  width: 100%;
  text-align: center;
  font-size: 50px;
  padding: 5px;
`.on({
      click: () => {
        store.route.next(-1);
      },
    })
  );

export const navitem = ({ module }) =>
  module.text.normal.extend(({ subs: { route }, self, context, store }) =>
    self.nest(context.name).css`
    padding: 10px;
    font-size: 23px;
    border-bottom: ${context.index === route ? "1px solid black" : "none"};
    `.on({
      click: () => {
        store.route.next(context.index);
      },
    })
  );

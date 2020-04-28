export const header = ({ module }) =>
  module.text.bold.extend(({ subs: { counter }, self, store }) =>
    self.css`
display: block;
background: blue;
width: 50%;
`
      .nest("Header")
      .on({ click: () => store.counter.next(counter + 1) })
  );

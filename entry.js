export const main = ({ module }) =>
  module.text.normal.extend(
    ({ self, module }) =>
      self.nest(module.header.header(), module.main.body()).css`display: block;`
  );

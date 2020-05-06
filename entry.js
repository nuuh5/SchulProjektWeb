export const main = ({ module }) =>
  module.text.normal.extend(
    ({ self, module }) => self.nest(module.header.header()).css`display: block;`
  );

export const main = ({ module }) =>
  module.text.normal.extend(({ self }) => self.nest("Hello world"));

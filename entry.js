export const main = ({ module }) =>
    module.text.normal.extend(
        ({ subs: { counter }, self, module }) => self.nest("Store counter:", counter, module.header.header())
    )
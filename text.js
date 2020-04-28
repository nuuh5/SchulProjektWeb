export const normal = ({ self }) => self.css`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 300;
    font-size: 20px;
`

export const bold = ({ module }) => module.text.normal.extend(({ self }) => self.css`
    font-weight: 500;
`)
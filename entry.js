const background = new Image();

background.src = "./forest.jpg";
background.style.position = "fixed";
background.style.display = "block";
background.style.top = "-10px";
background.style.left = "-10px";
background.style.right = "-10px";
background.style.bottom = "-10px";
background.style.minWidth = "calc(100vw + 20px)";
background.style.minHeight = "calc(100vh + 20px)";
background.style.zIndex = "-1";
background.style.filter = "blur(10px)";

document.body.style.background = "black";

export const main = ({ module }) =>
  module.text.normal.extend(
    ({ self, module }) =>
      self.nest(
        module.header.header(),
        module.main.body(),
        background,
        module.main.credits()
      ).css`
      display: block;
      overflow: hidden;
      
      `
  );

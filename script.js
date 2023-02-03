let visible1 = false;
let visible2 = false;
let visible3 = false;
let visible4 = false;
let visible5 = false;

const btn1 = document.querySelector("#btn-arrow1");
document.body.style.setProperty("--none1", "none");

const btn2 = document.querySelector("#btn-arrow2");
document.body.style.setProperty("--none2", "");
document.body.style.setProperty("--rotate", "180deg");
document.body.style.setProperty("--font-style2", "800");

const btn3 = document.querySelector("#btn-arrow3");
document.body.style.setProperty("--none3", "none");

const btn4 = document.querySelector("#btn-arrow4");
document.body.style.setProperty("--none4", "none");

const btn5 = document.querySelector("#btn-arrow5");
document.body.style.setProperty("--none5", "none");

function expandAndCloseFAQ() {
  btn1.addEventListener("click", () => {
    visible1 = !visible1;
    if (visible1) {
      document.body.style.setProperty("--none1", "");
      document.body.style.setProperty("--rotate1", "180deg");
      document.body.style.setProperty("--font-style1", "800");
    } else {
      document.body.style.setProperty("--none1", "none");
      document.body.style.setProperty("--rotate1", "0deg");
      document.body.style.setProperty("--font-style1", "400");
    }
  });

  btn2.addEventListener("click", () => {
    visible2 = !visible2;
    if (visible2) {
      document.body.style.setProperty("--none2", "");
      document.body.style.setProperty("--rotate2", "180deg");
      document.body.style.setProperty("--font-style2", "800");
    } else {
      document.body.style.setProperty("--none2", "none");
      document.body.style.setProperty("--rotate2", "0deg");
      document.body.style.setProperty("--font-style2", "400");
    }
  });

  btn3.addEventListener("click", () => {
    visible3 = !visible3;
    if (visible3) {
      document.body.style.setProperty("--none3", "");
      document.body.style.setProperty("--rotate3", "180deg");
      document.body.style.setProperty("--font-style3", "800");
    } else {
      document.body.style.setProperty("--none3", "none");
      document.body.style.setProperty("--rotate3", "0deg");
      document.body.style.setProperty("--font-style3", "400");
    }
  });

  btn4.addEventListener("click", () => {
    visible4 = !visible4;
    if (visible4) {
      document.body.style.setProperty("--none4", "");
      document.body.style.setProperty("--rotate4", "180deg");
      document.body.style.setProperty("--font-style4", "800");
    } else {
      document.body.style.setProperty("--none4", "none");
      document.body.style.setProperty("--rotate4", "0deg");
      document.body.style.setProperty("--font-style4", "400");
    }
  });

  btn5.addEventListener("click", () => {
    visible5 = !visible5;
    if (visible5) {
      document.body.style.setProperty("--none5", "");
      document.body.style.setProperty("--rotate5", "180deg");
      document.body.style.setProperty("--font-style5", "800");
    } else {
      document.body.style.setProperty("--none5", "none");
      document.body.style.setProperty("--rotate5", "0deg");
      document.body.style.setProperty("--font-style5", "400");
    }
  });
}

expandAndCloseFAQ();

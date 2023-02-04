//Get each arrow button

const btn1 = document.querySelector(".btn-arrow1");
const btn2 = document.querySelector(".btn-arrow2");
const btn3 = document.querySelector(".btn-arrow3");
const btn4 = document.querySelector(".btn-arrow4");
const btn5 = document.querySelector(".btn-arrow5");

//Declare visible variables

let visible1 = false;
let visible2 = true;
let visible3 = false;
let visible4 = false;
let visible5 = false;

//Initiate the State of the answer section

function setAnswers() {
  document.body.style.setProperty("--answer-visible1", "none");
  document.body.style.setProperty("--answer-visible2", "");
  document.body.style.setProperty("--answer-visible3", "none");
  document.body.style.setProperty("--answer-visible1", "none");
  document.body.style.setProperty("--answer-visible4", "none");
  document.body.style.setProperty("--answer-visible5", "none");
}
setAnswers();

//Set Fontweight
function setFontweight() {
  document.body.style.setProperty("--question-bold1", "400");
  document.body.style.setProperty("--question-bold2", "800");
  document.body.style.setProperty("--question-bold3", "400");
  document.body.style.setProperty("--question-bold4", "400");
  document.body.style.setProperty("--question-bol5", "400");
}
setFontweight();

//Function to enable: Expanding and close the answer section

function expanedAndCloseAnswer() {
  btn1.addEventListener("click", () => {
    expandAndCloseAnswer1();
  });

  btn2.addEventListener("click", () => {
    expandAndCloseAnswer2();
  });

  btn3.addEventListener("click", () => {
    expandAndCloseAnswer3();
  });

  btn4.addEventListener("click", () => {
    expandAndCloseAnswer4();
  });

  btn5.addEventListener("click", () => {
    expandAndCloseAnswer5();
  });
}

expanedAndCloseAnswer();

//Callback Functions

function expandAndCloseAnswer1() {
  visible1 = !visible1;
  if (visible1) {
    document.body.style.setProperty("--answer-visible1", "");
    document.body.style.setProperty("--question-bold1", "800");
    document.body.style;
  } else {
    document.body.style.setProperty("--answer-visible1", "none");
    document.body.style.setProperty("--question-bold1", "400");
  }
}

function expandAndCloseAnswer2() {
  visible2 = !visible2;
  if (!visible2) {
    document.body.style.setProperty("--answer-visible2", "none");
    document.body.style.setProperty("--question-bold2", "400");
  } else {
    document.body.style.setProperty("--answer-visible2", "");
    document.body.style.setProperty("--question-bold2", "800");
  }
}

function expandAndCloseAnswer3() {
  visible3 = !visible3;
  if (visible3) {
    document.body.style.setProperty("--answer-visible3", "");
    document.body.style.setProperty("--question-bold3", "800");
  } else {
    document.body.style.setProperty("--answer-visible3", "none");
    document.body.style.setProperty("--question-bold3", "400");
  }
}

function expandAndCloseAnswer4() {
  visible4 = !visible4;
  if (visible4) {
    document.body.style.setProperty("--answer-visible4", "");
    document.body.style.setProperty("--question-bold3", "800");
  } else {
    document.body.style.setProperty("--answer-visible4", "none");
    document.body.style.setProperty("--question-bold3", "400");
  }
}

function expandAndCloseAnswer5() {
  visible5 = !visible5;
  if (visible5) {
    document.body.style.setProperty("--answer-visible5", "");
    document.body.style.setProperty("--question-bold3", "800");
  } else {
    document.body.style.setProperty("--answer-visible5", "none");
    document.body.style.setProperty("--question-bold3", "400");
  }
}

const btn = document.querySelectorAll(".btn-arrow");
const answer = document.querySelectorAll(".answer");

function setFirstState() {
  for (let i = 0; i < btn.length; i++) {
    if (btn[i] != btn[1]) {
      btn[i].classList.add("invisible");
    }
  }
}
setFirstState();

function initializeState() {
  for (let i = 0; i < btn.length; i++) {
    if (btn[i].classList.value != "btn-arrow invisible") {
      answer[i].style.display = "inline-block";
    }
  }
}
initializeState();

function changeState() {
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
      if (btn[i].classList.value === "btn-arrow invisible") {
        answer[i].style.display = "inline-block";
        btn[i].classList.remove("invisible");
      } else {
        btn[i].classList.add("invisible");
        answer[i].style.display = "none";
      }
    });
  }
}
changeState();

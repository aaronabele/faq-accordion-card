const btn = document.querySelectorAll(".btn-arrow");
const answer = document.querySelectorAll(".answer");

function setFirstState() {
  for (let i = 0; i < btn.length; i++) {
    if (btn[i] != btn[1]) {
      btn[i].classList.add("invisible");
    } else {
      btn[i].classList.add("visible");
    }
  }
}

setFirstState();

function initializeState() {
  for (let i = 0; i < btn.length; i++) {
    if (btn[i].classList.value === "btn-arrow invisible") {
      answer[i].style.display = "none";
    } else {
      answer[i].style.display = "";
    }
  }
}

initializeState();

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    if (btn[i].classList.value === "btn-arrow invisible") {
      answer[i].style.display = "";
      btn[i].classList.remove("invisible");
      btn[i].classList.add("visible");
    } else if (btn[i].classList.value === "btn-arrow visible") {
      answer[i].style.display = "none";
      btn[i].classList.remove("visible");
      btn[i].classList.add("invisible");
    }
  });
}

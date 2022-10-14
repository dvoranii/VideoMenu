let btn = document.querySelector(".settings-btn");
let settingsMenu = document.querySelector(".settings-menu");

let optionsFirst = document.querySelectorAll(".list-main a");
let listMain = document.querySelector(".list-main");
let listSecondaryOne = document.querySelector(".list-second");
let listSecondaryTwo = document.querySelector(".list-third");
let listSecondaryThird = document.querySelector(".list-fourth");

let menuBack = document.querySelectorAll(".menu-back");

btn.addEventListener("click", function () {
  settingsMenu.classList.toggle("active");
});

optionsFirst.forEach((option) => {
  option.addEventListener("click", function (e) {
    e.preventDefault();
    if (option.dataset.option == 0) {
      listMain.classList.add("optionClicked");
      listSecondaryOne.classList.add("optionClicked");
      if (listSecondaryOne.classList.contains("optionClicked")) {
        settingsMenu.style.height = "150px";
      }
    }
    if (option.dataset.option == 1) {
      listMain.classList.add("optionClicked");
      listSecondaryTwo.classList.add("optionClicked");
      if (listSecondaryTwo.classList.contains("optionClicked")) {
        settingsMenu.style.height = "150px";
      }
    }
    if (option.dataset.option == 2) {
      listMain.classList.add("optionClicked");
      listSecondaryThird.classList.add("optionClicked");
      if (listSecondaryThird.classList.contains("optionClicked")) {
        settingsMenu.style.height = "150px";
      }
    }
  });
});

menuBack.forEach((btn) => {
  btn.addEventListener("click", function () {
    listMain.classList.remove("optionClicked");
    listSecondaryOne.classList.remove("optionClicked");
    listSecondaryTwo.classList.remove("optionClicked");
    listSecondaryThird.classList.remove("optionClicked");
    settingsMenu.style.height = "100px";
  });
});

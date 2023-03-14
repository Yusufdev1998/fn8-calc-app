import { setTheme, themes } from "./js/theme.js";
import {
  circleEl,
  delBtnEl,
  equalBtnEl,
  inputEl,
  numberEls,
  resetBtnEl,
  switchEl,
} from "./js/ui.js";

// state
let state = {
  theme: 0,
};

switchEl.addEventListener("click", function () {
  if (state.theme == 0) {
    setTheme(themes[1]);
    state.theme = 1;
    circleEl.style.transform = "translateX(20px)";
  } else if (state.theme == 1) {
    setTheme(themes[0]);
    state.theme = 0;
    circleEl.style.transform = "translateX(0)";
  }
});

numberEls.forEach(function (numberEl) {
  numberEl.addEventListener("click", function () {
    inputEl.value = inputEl.value + numberEl.textContent;
  });
});

delBtnEl.addEventListener("click", function () {
  inputEl.value = inputEl.value.slice(0, -1);
});

equalBtnEl.addEventListener("click", function () {
  inputEl.value = eval(inputEl.value);
});

resetBtnEl.addEventListener("click", function () {
  inputEl.value = "";
});

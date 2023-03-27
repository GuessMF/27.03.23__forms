const btn = document.querySelector(".btn");
btn.disabled = true;

const pinCode = document.getElementById("pin_code");

pinCode.addEventListener("keyup", () => {
  if (pinCode.value.length == 4) {
    btn.disabled = false;
    btn.classList.add("btn--main");
  } else {
    btn.disabled = true;
    btn.classList.remove("btn--main");
  }
});

pinCode.oninput = function () {
  if (this.value.length > 4) {
    this.value = this.value.slice(0, 4);
  }
};

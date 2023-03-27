const btn = document.querySelector(".btn");
btn.disabled = true;
const pinCode = document.getElementById("pin_code");

pinCode.addEventListener("keyup", () => {
  if (pinCode.value.length == 4) {
    btn.disabled = false;
    btn.classList.add("btn_active");
  } else {
    btn.disabled = true;
    btn.classList.remove("btn_active");
  }
});

pinCode.oninput = function () {
  if (this.value.length > 4) {
    this.value = this.value.slice(0, 4);
  }
};

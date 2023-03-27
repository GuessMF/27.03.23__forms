const pinCode = document.getElementById("pin_code");
const btn = document.querySelector(".btn");
btn.disabled = true;

pinCode.addEventListener("keyup", () => {
  if (pinCode.value.length == 4) {
    console.log("true");
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

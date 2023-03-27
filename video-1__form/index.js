const pinCode = document.getElementById("pin_code");
const btn = document.querySelector(".submit_btn");
btn.disabled = true;

pinCode.addEventListener("keyup", () => {
  if (pinCode.value.length == 4) {
    btn.disabled = false;
    btn.classList.add("sub_btn_active");
  } else {
    btn.disabled = true;
    btn.classList.remove("sub_btn_active");
  }
});

pinCode.oninput = function () {
  if (this.value.length > 4) {
    this.value = this.value.slice(0, 4);
  }
};

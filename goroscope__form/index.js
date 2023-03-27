const pinCode = document.getElementById("pin_code");
const item = document.querySelector(".item");
const btn = document.querySelector(".red-btn");
btn.disabled = true;

pinCode.addEventListener("keyup", () => {
  if (pinCode.value.length == 4) {
    console.log("true");
    btn.disabled = false;
    item.classList.add("button-jittery");
    btn.style.backgroundColor = "red";
    btn.style.border = "3px solid #fe0909";
  } else {
    btn.disabled = true;
    item.classList.remove("button-jittery");
    btn.style.backgroundColor = "gray";
    btn.style.border = "3px solid gray";
  }
});

pinCode.oninput = function () {
  if (this.value.length > 4) {
    this.value = this.value.slice(0, 4);
  }
};

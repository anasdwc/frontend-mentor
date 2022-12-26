const input = document.querySelector("input");
const inputDiv = document.querySelector(".input");
const buttonEle = document.querySelector("button");

const isEmailValid = (email) => {
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email.match(mailFormat)) {
    return true;
  }

  return false;
};

input.addEventListener("change", (e) => {
  const errorCount = document.querySelectorAll("p.error").length;

  let p = document.createElement("p");
  p.textContent = "Please provide a valid email address";
  p.classList.add("error");

  input.classList.add("error");

  if (!isEmailValid(e.target.value) && errorCount < 1) {
    console.log(e.target.parentNode);
    buttonEle.parentNode.insertBefore(p, buttonEle);
    return;
  }

  if (isEmailValid(e.target.value) || errorCount > 0) {
    document.querySelector("p.error").remove();
    input.classList.remove("error");
  }
});

buttonEle.addEventListener("click", (e) => e.preventDefault());

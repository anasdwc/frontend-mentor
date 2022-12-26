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

input.addEventListener("input", (e) => {
  const errorCount = document.querySelectorAll("p.error").length;

  let p = document.createElement("p");
  p.classList.add("error");

  input.classList.add("error");

  console.log('Value === ""', e.target.value === "");

  if (e.target.value === "" && errorCount < 1) {
    p.textContent = "Whoops! It looks like you forgot to add your email";
    buttonEle.parentNode.insertBefore(p, buttonEle);
    return;
  }

  if (!isEmailValid(e.target.value) && errorCount < 1) {
    p.textContent = "Please provide a valid email address";
    buttonEle.parentNode.insertBefore(p, buttonEle);
    return;
  }

  if (isEmailValid(e.target.value)) {
    document.querySelector("p.error").remove();
    input.classList.remove("error");
  }
});

buttonEle.addEventListener("click", (e) => e.preventDefault());

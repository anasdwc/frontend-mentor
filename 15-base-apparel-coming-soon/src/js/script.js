const button = document.querySelector(".content__button > form > button");
const input = document.querySelector(".content__button > form > input");
const form = document.querySelector("form");
const contentButton = form.parentElement;

const isEmailValid = (email) => {
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  return email.match(mailFormat) ? true : false;
};

const handleError = () => {
  const pError = document.querySelectorAll("p.error");
  const iconError = document.querySelectorAll(".error-icon");

  // Paragraph error
  let p = document.createElement("p");
  p.textContent = "Please provide a valid email";
  p.classList.add("error");

  // Icon Error
  const img = document.createElement("img");
  img.classList.add("error-icon");
  img.setAttribute("src", "./images/icon-error.svg");
  img.setAttribute("alt", "");
  img.setAttribute("aria-hidden", "true");

  if (input.value === "" || !isEmailValid(input.value)) {
    if (pError.length < 1 && iconError.length < 1) {
      form.appendChild(img);
      contentButton.appendChild(p);
      input.classList.add("error");
    }
    return;
  }

  if (isEmailValid) {
    if (pError.length == 1 && iconError.length == 1) {
      document.querySelector("p.error").remove();
      document.querySelector(".error-icon").remove();
      input.classList.remove("error");
    }
  }
};

form.addEventListener("click", (e) => {
  e.preventDefault();
});

button.addEventListener("click", () => handleError());
input.addEventListener("change", () => handleError());

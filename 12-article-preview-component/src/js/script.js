const shareMobile = document.querySelectorAll(".share-mobile");

// Mobile Active States
shareMobile.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const activeShare = document.querySelector(
      ".content--footer--share-active"
    );

    console.log(e.target);

    activeShare.classList.toggle("flex");
  });
});

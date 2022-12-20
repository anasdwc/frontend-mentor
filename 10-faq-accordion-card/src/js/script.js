const listsFAQ = document.querySelectorAll("li");

listsFAQ.forEach((list) => {
  list.addEventListener("click", (e) => {
    let li = e.currentTarget;

    li.classList.toggle("active");
  });
});

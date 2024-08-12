let love = document.querySelectorAll(".project .love"),
    menu = document.querySelector(".bi-text-paragraph"),
    navBar = document.querySelector(".nav-links")
;
love.forEach((item) => {
  item.addEventListener("click", (e) =>{
    item.classList.toggle("clicked");
  });
})

menu.addEventListener("click", () => {
  navBar.style.marginRight = "0"
})


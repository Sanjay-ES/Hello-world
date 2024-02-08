const nav = document.querySelector(".hl-header");
window.addEventListener("scroll", () => {
  if (scrollY > 30){
    nav.classList.add("hl-header--sticky");
  }
  else {
    nav.classList.remove("hl-header--sticky");
  }
})

const topNav = document.getElementsByClassName("nav--top")[0];

const navBtn = document.getElementsByClassName("toggle-nav")[0];

const toggleIcon = {
    open: document.getElementsByClassName("toggle-nav__icon--open")[0],
    close: document.getElementsByClassName("toggle-nav__icon--close")[0]
}

navBtn.addEventListener("click", () => {
  if (!topNav.classList.contains("nav--mobile")) {
    topNav.classList.add("nav--mobile");
    toggleIcon.open.style.display = "none"
    toggleIcon.close.style.display = "block"
  } else {
    topNav.classList.remove("nav--mobile");
    toggleIcon.open.style.display = "block"
    toggleIcon.close.style.display = "none"
  }
});

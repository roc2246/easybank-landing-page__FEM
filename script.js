const topNav = document.getElementsByClassName("nav--top")[0];
const topLinks = document.getElementsByClassName("nav__links--top")[0];
const topLink = document.getElementsByClassName("nav__link--top");
const topAnchor = document.getElementsByClassName("nav__anchor--top");

const navBtn = document.getElementsByClassName("toggle-nav")[0];

const toggleIcon = {
  open: document.getElementsByClassName("toggle-nav__icon--open")[0],
  close: document.getElementsByClassName("toggle-nav__icon--close")[0],
};

navBtn.addEventListener("click", () => {
  if (!topNav.classList.contains("nav--mobile")) {
    topNav.classList.add("nav--mobile");
    topLinks.classList.add("nav__links--mobile");
    for(let x = 0; x <topLink.length; x++){
      topLink[x].classList.add("nav__link--mobile");
    }
    for(let x = 0; x <topAnchor.length; x++){
        topAnchor[x].classList.add("nav__anchor--mobile");
      }
    toggleIcon.open.style.display = "none";
    toggleIcon.close.style.display = "block";
  } else {
    topNav.classList.remove("nav--mobile");
    topLinks.classList.remove("nav__links--mobile");
    for(let x = 0; x <topLink.length; x++){
        topLink[x].classList.remove("nav__link--mobile");
      }
      for(let x = 0; x <topAnchor.length; x++){
        topAnchor[x].classList.remove("nav__anchor--mobile");
      }
    toggleIcon.open.style.display = "block";
    toggleIcon.close.style.display = "none";
  }
});

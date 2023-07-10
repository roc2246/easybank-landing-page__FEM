let isOpen;

const header = document.getElementsByTagName("header")[0]

const topNav = {
  container: document.getElementsByClassName("nav--top")[0],
  links: document.getElementsByClassName("nav__links--top")[0],
  link: document.getElementsByClassName("nav__link--top"),
  anchor: document.getElementsByClassName("nav__anchor--top")
}

const toggleIcon = {
  btn: document.getElementsByClassName("toggle-nav")[0],
  open: document.getElementsByClassName("toggle-nav__icon--open")[0],
  close: document.getElementsByClassName("toggle-nav__icon--close")[0],
};

function toggleStyle(action) {
  topNav.container.classList[action]("nav--mobile");
  topNav.links.classList[action]("nav__links--mobile");
  header.classList[action]("header--mobile");
  for (let x = 0; x < topNav.link.length; x++) {
    topNav.link[x].classList[action]("nav__link--mobile");
  }
  for (let x = 0; x < topNav.anchor.length; x++) {
    topNav.anchor[x].classList[action]("nav__anchor--mobile");
  }
}

toggleIcon.btn.addEventListener("click", () => {
  if (!topNav.container.classList.contains("nav--mobile")) {
    isOpen = true;
    toggleStyle("add");
    toggleIcon.open.style.display = "none";
    toggleIcon.close.style.display = "block";
  } else {
    isOpen = false;
    toggleStyle("remove");
    toggleIcon.open.style.display = "block";
    toggleIcon.close.style.display = "none";
  }
});

window.addEventListener("resize", (e) => {
  const width = e.target.innerWidth;
  if (width > 716 && isOpen) {
    toggleStyle("remove");
  } else if(width < 716 && isOpen){
    toggleStyle("add");
  }
});

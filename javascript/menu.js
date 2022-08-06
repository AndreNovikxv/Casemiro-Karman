class MobileNavbar {
  constructor(a, b, c) {
    (this.mobileMenu = document.querySelector(a)),
      (this.navList = document.querySelector(b)),
      (this.navLinks = document.querySelectorAll(c)),
      (this.activeClass = "active"),
      (this.handleClick = this.handleClick.bind(this));
  }
  animateLinks() {
    this.navLinks.forEach((a) => {
      a.style.animation = a.style.animation
        ? ""
        : "navLinkFade 0.5s ease-in-out forwars $ {index / 7 + 0.3}s";
    });
  }
  handleClick() {
    this.navList.classList.toggle(this.activeClass),
      this.mobileMenu.classList.toggle(this.activeClass),
      this.animateLinks();
  }
  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }
  init() {
    return this.mobileMenu && this.addClickEvent(), this;
  }
}
const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);
mobileNavbar.init();

const BurgerMenu = () => {

    const addEventOnElem = function (elem, type, callback) {
        if (elem.length > 1) {
          for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
          }
        } else {
          elem.addEventListener(type, callback);
        }
      }

    const navbar = document.querySelector("[data-navbar]");
    const navToggler = document.querySelector("[data-nav-toggler]");
    const navLinks = document.querySelectorAll("[data-nav-link]");

    const toggleNavbar = () => navbar.classList.toggle("active");

    addEventOnElem(navToggler, "click", toggleNavbar);

    const closeNavbar = () => navbar.classList.remove("active");

    addEventOnElem(navLinks, "click", closeNavbar)

}

export default BurgerMenu;
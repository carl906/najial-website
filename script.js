document.addEventListener("DOMContentLoaded", () => {
  const navButton = document.getElementsByClassName("nav-bar")[0];
  const sideMenu = document.getElementById("navigations");
  const navBar = navButton.querySelector("i");

  navButton.addEventListener("click", () => {
    sideMenu.classList.toggle("side-open");
    navButton.classList.toggle("change-color")
    

    const isList = navBar.classList.contains("bi-list");
    navBar.classList.toggle("bi-x");
    navBar.classList.toggle("bi-list");

    if(isList){
      navButton.classList.add("is-x");
    }else{
      navButton.classList.remove("is-x");
    }
  });

  const sections = document.querySelectorAll("section");
  const indicator = document.getElementById("section-indicator");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        indicator.textContent = entry.target.dataset.title;
      }
    });
  }, {
    threshold: 0.50
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});

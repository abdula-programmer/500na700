import { removeClassActive } from "./rainbows";

const navListItems = document.querySelectorAll(".nav__list-item"),
      bg = document.querySelector(".bg-list"),
      navButton = document.querySelector(".nav-button"),
      navList = document.querySelector(".nav__list");

const listHasActiveEl = (list, el) => {
  let res = false;
  list.forEach((elem) => {
    if (elem.classList.contains("active") && elem !== el) {
      res = true;
    }
  });
  return res;
};

navListItems.forEach((el) => {
  el.addEventListener("click", () => {
    console.log(listHasActiveEl(navListItems));

    if (listHasActiveEl(navListItems, el)) {
      removeClassActive(navListItems);
      el.classList.add("active");
    } else {
      el.classList.toggle("active");
      bg.classList.toggle("active");
    }
  });
});


navButton.addEventListener('click', () => {
    navList.classList.toggle('active')
    navButton.classList.toggle('active')
    document.body.classList.toggle('active')
})





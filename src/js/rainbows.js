const swiper = new Swiper(".swiper.banner", {
  spaceBetween: 20,
  slidesPerView: "auto",
  slidesPerScroll: 1,
  centeredSlides: true,
  loop: true,
  loopedSlides: 1,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});

export const removeClassActive = (akkardeonListItems) => {
  akkardeonListItems.forEach((el) => {
    el.classList.remove("active");
  });
};

const akkardeonList = document.querySelector(".akkardeon__list"),
  akkardeonListItems = akkardeonList.querySelectorAll(".akkardeon__list-item");

akkardeonList.addEventListener("click", (e) => {
  const target = e.target;

  akkardeonListItems.forEach((el) => {
    const header = el.querySelector("h2");
    if (target === el || target === header) {
      removeClassActive(akkardeonListItems);
      el.classList.add("active");
    }
  });
});

if (screen.width <= 1200) {
  const swiper1 = new Swiper(".news__swiper", {
    spaceBetween: 20,
    slidesPerView: 'auto',
    breakpoints: {
      768: {
        slidesPerView: 3,
      }
    }
  });

  
}

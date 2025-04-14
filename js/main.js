document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".guideSwiper", {
    slidesPerView: 1,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
      slideChange: function () {
        const prevBtn = document.querySelector(".swiper-button-prev");
        const nextBtn = document.querySelector(".swiper-button-next");

        prevBtn.classList.remove("swiper-button-disabled");
        nextBtn.classList.remove("swiper-button-disabled");

        if (this.activeIndex === 0) {
          prevBtn.classList.add("swiper-button-disabled");
        }

        if (this.activeIndex === this.slides.length - 1) {
          nextBtn.classList.add("swiper-button-disabled");
        }
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".guideSwiper", {
    slidesPerView: 1,
    loop: false,
    navigation: {
      nextEl: ".swiper-buttons-next",
      prevEl: ".swiper-buttons-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
      slideChange: function () {
        const prevBtn = document.querySelector(".swiper-buttons-prev");
        const nextBtn = document.querySelector(".swiper-buttons-next");

        prevBtn.classList.remove("swiper-buttons-disabled");
        nextBtn.classList.remove("swiper-buttons-disabled");

        if (this.activeIndex === 0) {
          prevBtn.classList.add("swiper-buttons-disabled");
        }

        if (this.activeIndex === this.slides.length - 1) {
          nextBtn.classList.add("swiper-buttons-disabled");
        }
      }
    }
  });
});

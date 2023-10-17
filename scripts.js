const swiper = new Swiper(".swiper-hero", {
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-nex",
    prevEl: ".swiper-button-pre",
  },
});

const swiperProducts = new Swiper(".swiperProducts", {
  slidesPerView: "auto",
  slidesPerGroup: 5,
  loopFillGroupWithBlank: true,
  loop: false,
  direction: "horizontal",
  pagination: {
    el: ".swiper-pagination-products",
  },
});

const groupButtons = document.querySelectorAll(".group-btn");
groupButtons.forEach((button) => {
  button.addEventListener("click", function (btn) {
    groupButtons.forEach((btnn) => {
      btnn.classList.remove("btn-active");
    });
    let number = this.dataset.number;
    showCarousel(`group${number}`);
    btn.target.classList.add("btn-active");
  });
});

function showCarousel(groupId) {
  const carousels = document.querySelectorAll(".group");
  carousels.forEach((group) => {
    group.classList.add("hidden");
  });

  const selectedGroup = document.getElementById(groupId);
  if (selectedGroup) {
    selectedGroup.classList.remove("hidden");
  }
}

function showNav() {
  document.getElementById("nav-ul").classList.toggle("hidden");
}

const productButtons = document.querySelectorAll(".product-navigation a");

productButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    productButtons.forEach((btn) => {
      btn.classList.remove("active");
    });
    this.classList.add("active");
  });
});

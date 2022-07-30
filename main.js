$(document).ready(function () {
  let position = 0;
  const slidesToShow = 1;
  const slidesToScroll = 1;
  const container = $(".slider-container");
  const track = $(".slider-track");
  const item = $(".slider-item");
  const btnPrev = $(".btn-prev");
  const btnNext = $(".btn-next");
  const itemsCount = item.length;
  const itemWidth = container.width();
  const movePosition = slidesToScroll * itemWidth;
  const startPosition = item.each(function (index, item) {
    $(item).css({
      minWidth: itemWidth,
    });
  });

  btnNext.click(function () {
    const itemsLeft =
      itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -=
      itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition();
    checkBtns();
  });

  btnPrev.click(function () {
    const itemsLeft = Math.abs(position) / itemWidth;

    position +=
      itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition();
    checkBtns();
  });

  const setPosition = () => {
    track.css({
      transform: `translateX(${position}px)`,
    });
  };

  const checkBtns = () => {
    btnPrev.prop("disabled", position === 0);
    btnNext.prop(
      "disabled",
      position <= -(itemsCount - slidesToShow) * itemWidth
    );
  };
});

// BURGER

(function () {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".header__nav");
  const menuItem = document.querySelectorAll(".header__nav-item-link");
  const close = document.querySelector(".header__nav-close");

  burgerItem.addEventListener("click", () => {
    menu.classList.add("header__nav_active");
  });

  close.addEventListener("click", () => {
    menu.classList.remove("header__nav_active");
  });

  menuItem.forEach((menuItem) =>
    menuItem.addEventListener("click", () => {
      menu.classList.remove("header__nav_active");
    })
  );
})();

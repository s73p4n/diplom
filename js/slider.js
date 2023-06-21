const cards = document.querySelectorAll(".gallery__card"),
  pictures = document.querySelectorAll(".gallery__img"),
  slider = document.querySelector(".slider"),
  sliderContainer = document.querySelector(".slider__container"),
  sliderBtnLeft = document.querySelector(".slider__btn-left"),
  sliderBtnRight = document.querySelector(".slider__btn-right"),
  sliderClose = document.querySelector(".slider__btn-close");

let cardIndex = 0,
  pictureFull = null,
  newPictureFull = null;

sliderBtnLeft.addEventListener("click", () => changePicture("left"));
sliderBtnRight.addEventListener("click", () => changePicture("right"));
sliderClose.addEventListener("click", () => closeSlider());

cards.forEach((item, index) => {
  item.addEventListener("click", () => {
    cardIndex = index;
    showPicture();
  });
});

const showPicture = () => {
  pictureFull = pictures[cardIndex].cloneNode();
  pictureFull.style.width = "100%";
  sliderContainer.append(pictureFull);
  slider.classList.remove("hidden");
};

const changePicture = (dir) => {
  if (dir === "left") {
    cardIndex > 0 ? cardIndex-- : (cardIndex = cards.length - 1);
  } else if (dir === "right") {
    cardIndex < cards.length - 1 ? cardIndex++ : (cardIndex = 0);
  } else {
    return;
  }

  newPictureFull = pictures[cardIndex].cloneNode();
  newPictureFull.style.width = "100%";
  pictureFull.replaceWith(newPictureFull);
  pictureFull = newPictureFull;
};

const closeSlider = () => {
  pictureFull && pictureFull.remove();
  newPictureFull && newPictureFull.remove();
  slider.classList.add("hidden");
};

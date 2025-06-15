const sections = document.querySelectorAll("section");
const sideText = document.querySelector(".side-text");
const navContainer = document.querySelector(".nav");
const navTexts = document.querySelectorAll(".nav > p");
const illustrationImgs = document.querySelectorAll(".illus-img-con");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const imgDescriptions = document.querySelectorAll(".img-description");
const closeBtns = document.querySelectorAll(".btn-close");

let currentIndex = 1;
let isScrolling = false;
let currentScreen = 0;

document.addEventListener("wheel", (event) => {
  if (isScrolling) return; // 스크롤 중이면 return

  isScrolling = true;

  const clientHeight = window.innerHeight;

  // 아래로 스크롤
  if (event.deltaY > 0) {
    if (currentScreen < sections.length - 1) {
      currentScreen++;
      scrollTo({
        top: clientHeight * currentScreen,
        behavior: "smooth",
      });
    }
  }
  // 위로 스크롤
  else if (event.deltaY < 0) {
    if (currentScreen > 0) {
      currentScreen--;
      scrollTo({
        top: clientHeight * currentScreen,
        behavior: "smooth",
      });
    }
  }

  // 스크롤 완료 후 플래그 해제
  setTimeout(() => {
    isScrolling = false;
  }, 400);
});

sideText.addEventListener("click", () => {
  const clientHeight = window.innerHeight;
  if (navContainer.classList.contains("active")) {
    navContainer.classList.remove("active");
    isScrolling = false;
  } else {
    navContainer.classList.add("active");
    isScrolling = true;
  }
  navContainer.style.top = `${clientHeight * currentScreen}px`;
});

navTexts.forEach((nav, idx) => {
  const clientHeight = window.innerHeight;

  switch (idx) {
    case 0:
      nav.addEventListener("click", () => {
        scrollTo({
          top: clientHeight * 1,
          behavior: "smooth",
        });
        currentScreen = 1;
        navContainer.classList.remove("active");
        isScrolling = false;
      });
      break;
    case 1:
      nav.addEventListener("click", () => {
        scrollTo({
          top: clientHeight * 2,
          behavior: "smooth",
        });
        currentScreen = 2;
        navContainer.classList.remove("active");
        isScrolling = false;
      });
      break;
    case 2:
      nav.addEventListener("click", () => {
        scrollTo({
          top: clientHeight * 3,
          behavior: "smooth",
        });
        currentScreen = 3;
        navContainer.classList.remove("active");
        isScrolling = false;
      });
      break;
    case 3:
      nav.addEventListener("click", () => {
        scrollTo({
          top: clientHeight * 8,
          behavior: "smooth",
        });
        currentScreen = 8;
        navContainer.classList.remove("active");
        isScrolling = false;
      });
      break;
    case 4:
      nav.addEventListener("click", () => {
        scrollTo({
          top: clientHeight * 9,
          behavior: "smooth",
        });
        currentScreen = 9;
        navContainer.classList.remove("active");
        isScrolling = false;
      });
      break;
  }
});

prevButton.addEventListener("click", () => {
  if (currentIndex == 1) {
    currentIndex = 5;
  } else {
    currentIndex--;
  }
  changeImg();
});

nextButton.addEventListener("click", () => {
  if (currentIndex == 5) {
    currentIndex = 1;
  } else {
    currentIndex++;
  }
  changeImg();
});

illustrationImgs.forEach((img, index) => {
  img.addEventListener("click", () => {
    imgDescriptions[index].classList.add("active");
    isScrolling = true;
  });
});

// 일러스트 section에서 X 버튼 클릭시 창 닫히도록
closeBtns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    console.log("close");
    imgDescriptions[idx].classList.remove("active");

    isScrolling = false;
  });
});

function changeImg() {
  illustrationImgs.forEach((img, index) => {
    if (index == currentIndex - 1) {
      img.classList.add("active");
    } else {
      img.classList.remove("active");
    }
  });
}

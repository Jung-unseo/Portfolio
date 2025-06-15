const sections = document.querySelectorAll("section");
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
  }, 800);
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
  });
});

// 일러스트 section에서 X 버튼 클릭시 창 닫히도록
closeBtns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    console.log("close");
    imgDescriptions[idx].classList.remove("active");
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
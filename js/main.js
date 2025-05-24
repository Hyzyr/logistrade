var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;

const closeMenu = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("active");
  body.classList.remove("active");
};

menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    closeMenu();
  }
};

const header = document.getElementById("header");
if (header)
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 100) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });

const links = document.querySelectorAll(".links");
const sections = document.querySelectorAll(".anchor");
function changeLinkState() {
  let index = sections.length;
  while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
  links.forEach((link) => link.classList.remove("active"));
  links[index]?.classList.add("active");
}
links.forEach((e) => {
  onLinkClick(e);
});
function onLinkClick(linkItem) {
  linkItem.addEventListener("click", function () {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  });
}
function onLinkClick(linkItem) {
  linkItem.addEventListener("click", function () {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  });
}
window.onscroll = function () {
  changeLinkState();
};

///
///
///
///WOW JS
// new WOW().init({
//   boxClass: "wow",
// });






// counter ------------
// const amounts = document.querySelector(".amounts");
// if (amounts) {
//   const animationDuration = 2000;
//   const frameDuration = 1000 / 60;
//   const totalFrames = Math.round(animationDuration / frameDuration);
//   const easeOutQuad = (t) => t * (2 - t);
//   let isCounting = true;
//   const animateCountUp = (el) => {
//     let frame = 0;
//     const countTo = parseInt(el.getAttribute("data-count"), 10);
//     const counter = setInterval(() => {
//       frame++;
//       const progress = easeOutQuad(frame / totalFrames);
//       const currentCount = Math.round(countTo * progress);
//       if (parseInt(20, 10) !== currentCount) {
//         el.innerHTML = currentCount;
//       }
//       if (frame === totalFrames) {
//         clearInterval(counter);
//       }
//     }, frameDuration);
//   };
//   const runAnimations = () => {
//     const countupEls = document.querySelectorAll(".counter");
//     countupEls.forEach(animateCountUp);
//   };
//   const isVisible = function (elem) {
//     var bounding = elem.getBoundingClientRect();
//     return (
//       bounding.top >= 0 &&
//       bounding.left >= 0 &&
//       bounding.bottom <=
//         (window.innerHeight || document.documentElement.clientHeight) &&
//       bounding.right <=
//         (window.innerWidth || document.documentElement.clientWidth)
//     );
//   };
//   document.addEventListener("scroll", () => {
//     const visible = isVisible(amounts);
//     if (visible && isCounting) {
//       runAnimations();
//       isCounting = false;
//     }
//   });
// }
// counter ------------

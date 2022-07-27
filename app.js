// navbar
const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
// const navTitle = document.querySelector(".nav-title");
// const navLink = document.querySelectorAll(".nav-link");

const date = document.querySelector("#date");
// add fixed class to navbar
// window.addEventListener("scroll", function () {
//   if (window.pageYOffset > 80) {
//     navbar.classList.add("navbar-fixed");
//     navTitle.classList.add("black");
//     navLink.forEach(function (link) {
//       link.classList.add("black");
//     });
//   } else {
//     navbar.classList.remove("navbar-fixed");
//     navTitle.classList.remove("black");
//     navLink.forEach(function (link) {
//       link.classList.remove("black");
//     });
//   }
// });
// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
// loader

const loaderContainer = document.querySelector(".loader-container");
const loader = document.querySelector(".loader");
const content = document.querySelector(".content");

window.addEventListener("DOMContentLoaded", function () {
  loader.classList.add("hide");
  loader.classList.add("hide-loader");
  loaderContainer.classList.add("hide");
  content.classList.remove("hide");
});

// slider

const members = [
  {
    img: "./imgs/project-1.jpeg",
    name: "peter doe",
    role: "product manager",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis? `,
  },
  {
    img: "./imgs/project-1.jpeg",
    name: "susan doe",
    role: "developer",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
  },
  {
    img: "./imgs/project-1.jpeg",
    name: "emma doe",
    role: "designer",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
  },
];

const container = document.querySelector(".member-container");
const nextBtn = document.querySelector(".member-next-btn");
const prevBtn = document.querySelector(".member-prev-btn");
// if length is 1 hide buttons
if (members.length === 1) {
  nextBtn.style.display = "none";
  prevBtn.style.display = "none";
}
// if length is 2, add copies of slides
let teamMembers = [...members];
if (members.length === 2) {
  teamMembers = [...members, ...members];
}
container.innerHTML = teamMembers
  .map((member, slideIndex) => {
    const { img, name, role, text } = member;
    let position = "next";
    if (slideIndex === 0) {
      position = "active";
    }
    if (slideIndex === teamMembers.length - 1) {
      position = "last";
    }
    if (members.length <= 1) {
      position = "active";
    }
    return `<article class="member ${position}">
  <img src=${img} class="member-img" alt="${name}"/>
  <h4 class="member-name">${name}</h4>
  <p class="member-role">${role}</p>
  <p class="member-text">
   ${text}
  </p>
 </article>`;
  })
  .join("");

const startSlider = (type) => {
  // get all three slides active,last next
  const active = document.querySelector(".active");
  const last = document.querySelector(".last");
  let next = active.nextElementSibling;
  if (!next) {
    next = container.firstElementChild;
  }
  active.classList.remove("active");
  last.classList.remove("last");
  next.classList.remove("next");

  if (type === "prev") {
    active.classList.add("next");
    last.classList.add("active");
    next = last.previousElementSibling;
    if (!next) {
      next = container.lastElementChild;
    }
    next.classList.remove("next");
    next.classList.add("last");
    return;
  }
  active.classList.add("last");
  last.classList.add("next");
  next.classList.add("active");
};
nextBtn.addEventListener("click", () => {
  startSlider();
});
prevBtn.addEventListener("click", () => {
  startSlider("prev");
});

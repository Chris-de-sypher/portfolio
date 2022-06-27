/** @format */

// ScrollReveal().reveal("");

const welcome = document.querySelector(".welcome-page");
const About = document.querySelector(".About-page");
const work = document.querySelector(".work-experience");
const port = document.querySelector("portfolio-page");
const quote = document.querySelector(".service-page");
const contact = document.querySelector(".contact-page");
const rate = document.querySelector(".rate");
const footer = document.querySelector("footer");

ScrollReveal({ distance: "45px", duration: 2700, reset: true }).reveal(
  ".welcome-page",
  { delay: 350, origin: "bottom" }
);
ScrollReveal({ distance: "45px", duration: 2700, reset: true }).reveal(
  ".About-page",
  { delay: 250, origin: "bottom" }
);
ScrollReveal({ distance: "45px", duration: 2700, reset: true }).reveal(
  ".work-experience",
  { delay: 200, origin: "bottom" }
);
ScrollReveal({ distance: "45px", duration: 2700, reset: true }).reveal(
  ".portfolio-page",
  { delay: 350, origin: "bottom" }
);
ScrollReveal({ distance: "45px", duration: 2700, reset: true }).reveal(
  ".service-page",
  { delay: 350, origin: "bottom" }
);
ScrollReveal({ distance: "45px", duration: 2700, reset: true }).reveal(
  ".contact-page",
  { delay: 350, origin: "bottom" }
);
ScrollReveal({ distance: "45px", duration: 2700, reset: true }).reveal(
  ".rate",
  { delay: 350, origin: "bottom" }
);
ScrollReveal({ distance: "45px", duration: 2700, reset: false }).reveal(
  "footer",
  { delay: 350, origin: "bottom" }
);

ScrollReveal({ reset: true }).reveal(".my-text", {
  delay: 250,
  origin: "left",
});
ScrollReveal({ reset: true, distance:"20px", duration:1000}).reveal(".programming-laguage", {
  delay: 290,
  origin: "left",
});
ScrollReveal().reveal(".fig", { delay: 300, origin: "left" });
ScrollReveal().reveal(".text", { delay: 200, origin: "right" });
ScrollReveal({ reset: true }).reveal(".fa-star", { delay: 100, origin: "right" });


// const barbtn = document.querySelector(".fa-bars");
// window.addEventListener("scroll", function () {
//     barbtn.classList.toggle("fabtn", window.scrollY > 0)
// })



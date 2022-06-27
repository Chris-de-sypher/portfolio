/** @format */
/* change color active-start*/
const wrapper = document.querySelector(".wrapper-color");
const btn = document.querySelector(".icon");
const colors = document.querySelector(".colors")

btn.addEventListener("click", function () {
  wrapper.classList.toggle("active");
  colors.style.visibility = "visible";
  setTimeout(()=> colors.style.visibility="hidden", 30000)
});

window.addEventListener("scroll", function () {
  if (wrapper.classList.toggle("active")) {
    wrapper.classList.remove("active");
  colors.style.visibility = "hidden";
  }
});
/* change color active-end*/

/*change color-start*/
const color = document.querySelectorAll(".color-pallette");

color.forEach((items) => {
  items.addEventListener("click", function () {
    let target = items.getAttribute("data-color");
    document
      .querySelector(":root")
      .style.setProperty("--default-color-all", target);
  });
});
/*change color-end*/


/* star-like-start*/
const star = document.querySelectorAll(".fa-star");

star.forEach(wars => {
  wars.addEventListener("click", function () {
    wars.style.color = "yellow";
  });
});
/* star-like-end*/



/*dark theme start*/
const on = document.querySelector('#on');
const off = document.querySelector('#off');

on.addEventListener("click", function () {
  document.body.style.background = "#a9a9a9";
  on.style.display = "none";
  off.style.display = "block";
  document.querySelector("#navbar").style.background = "#a9a9a9";
});
off.addEventListener("click", function () {
  document.body.style.background = "#ded3db";
  on.style.display = "block";
  off.style.display = "none";
  document.querySelector("#navbar").style.background = "#ded3db";
});
/*dark theme end*/






// let light = ["#ded3db","#a9a9a9"];
// let i = 0;
 
// bulb.addEventListener('click', function () {
//   i = i < light.length ? ++i : 0;
//   document.body.style.background = light[i];
//   document.querySelector("#navbar").style.background = light[i];
//     bulb.style.color = "#000";
//   if (light[0]) {
//     bulb.style.color = "yellow";
//   }
// })















// const mine = document.querySelectorAll(".mine");

// mine.forEach(mines => {
//  mines.getAttribute("colors", {
//     secondary: document
//       .querySelector(":root")
//       .style.setProperty("--default-color-all"),
//     primary: document
//       .querySelector(":root")
//       .style.setProperty("--default-color-all"),
//     quaternary: document
//       .querySelector(":root")
//       .style.setProperty("--default-color-all"),
//     quinary: document
//       .querySelector(":root")
//       .style.setProperty("--default-color-all"),
//     tertiary: document
//       .querySelector(":root")
//       .style.setProperty("--default-color-all"),
//     outline: document
//       .querySelector(":root")
//       .style.setProperty("--default-color-all")
//   });
// })


// ["", "I am a webdesigner", "I am a youtuber", "I am a software Designer"]

// link.forEach((item) => {
//   item.addEventListener("click", function () {
//     item.classList.add("showactive");
//   });
// });

// const welcome = document.getElementById("welcome");
//   var i = 0;
//   var txt = "I am a software Designer"; /* The text */
//   var speed = 50; /* The speed/duration of the effect in milliseconds */
// var loop = true;

// function typeWritter(){
//      if (i < txt.length) {
//     document.getElementById("welcome").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
//  }



// function showText() {
//        if (i < strings.length) {
//       document.getElementById("welcome").innerHTML += txt.charAt(i);
//       i++;
//       setTimeout(showText, typeSpeed, BackSpeed, loop);
//     }
// }


/* menu button start*/
const bars = document.querySelector(".fa-bars");
const bar = document.querySelector(".fa-xmark");

bars.addEventListener("click", function () {
  navbar.style.display = "block";
  bar.style.display = "block";
  if ((navbar.style.display = "block")) {
    bars.style.display = "none";
  }
});

bar.addEventListener("click", function () {
  navbar.style.display = "none";
  bar.style.display = "none";
  if ((navbar.style.display = "none")) {
    bars.style.display = "block";
  }
});
// let result = 4 > 2;
// const remove = document.querySelectorAll(".nav-link");
// const div = document.querySelector("#navbar");

//   remove.forEach(all => all.addEventListener("click", function () {
//     if (result) {
//       div.style.display = "none";
//       bar.style.display = "none";
//       bars.style.display = "block";
//       window.addEventListener("scroll", function () {
//         div.style.display = "none";
//             });
//     }
//   }))


/* menu button end*/







// navbar.forEach(element => {
//   element.addEventListener('click', function () {
//     navbar.forEach(nav => nav.classList.remove("showactive"))
    
//     this.classList.add("showactive");
//     sec.forEach(more => {
      
//     })
//   })
// })

/* show active nabar-start*/
const navbar = document.querySelector("#navbar");
const link = document.querySelectorAll(".nav-link");
const sec = document.querySelectorAll("section");
console.log(navbar);



function showcolor() {
  let len = sec.length;
  while (--len && window.scrollY + 97 < sec[len].offsetTop) { }
  link.forEach(anchor => anchor.classList.remove("showactive"));
  link[len].classList.add("showactive");
}
showcolor();
window.addEventListener("scroll", showcolor);
/* show active nabar-end*/




const s = document.querySelectorAll(".nav-link");
const bg = document.querySelector('.bg');

bg.addEventListener("click", function () {
  document.querySelector('#nav-links').classList.toggle("display");
  s.forEach(spear => spear.addEventListener("click", function () {
    var f = 2 > 1;
    if (f) {
        document.querySelector("#nav-links").classList.remove("display");
    }
  }))
})



let cursor = document.getElementById("cursor");
let close = document.getElementsByClassName("close");
let closeID = document.getElementById("close");  // assuming close is an ID
let body = document.body;
let iframe = document.getElementById("pen");
let penLink = document.getElementById("penlink");
let links = document.getElementsByTagName("a");

let frames = [
  "https://www.misala.de",
  "https://misalagp.github.io/react-cv/",
  "https://misalagp.github.io/fonticci/",
  "https://performcb.com",
  "https://bay42.io",
  "https://codepen.io/p0waqqatsi/full/GRegEOm",
  "https://codepen.io/p0waqqatsi/full/MWLxOKv",
  "https://codepen.io/p0waqqatsi/full/yLZQvyb",
  "https://codepen.io/p0waqqatsi/full/GRzwymw",
  "https://codepen.io/p0waqqatsi/full/LYbKNLd"
];


let cards = document.getElementsByClassName("inner");
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("mousemove", function (event) {
    cursor.classList.add("active");
  });
  cards[i].addEventListener("mouseover", function (event) {
    cursor.classList.add("active");
  });

  cards[i].addEventListener("mouseout", function (event) {
    cursor.classList.remove("active");
  });
  cards[i].addEventListener("click", function (i) {
    console.log("Clicked on card", i);
    window.open(frames[i], '_blank'); // Open link in a new window
  }.bind(null, i));
}

// Escape key option to exit active state

document.onkeydown = function (evt) {
  evt = evt || window.event;
  let isEscape = false;
  if ("key" in evt) {
    isEscape = evt.key === "Escape" || evt.key === "Esc";
  } else {
    isEscape = evt.keyCode === 27;
  }
  if (isEscape) {
    body.classList.remove("active");
    setTimeout(() => {
      iframe.setAttribute("src", "");
    }, 2000);
  }
};

// If close is a class
// if (close.length > 0) {
//   for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener("click", function (event) {
//       body.classList.remove("active");
//       setTimeout(() => {
//         iframe.setAttribute("src", "");
//       }, 2000);
//     });
//   }
// }
// If close is an ID
// if (close) {
//   close.addEventListener("click", function (event) {
//     body.classList.remove("active");
//     setTimeout(() => {
//       iframe.setAttribute("src", "");
//     }, 2000);
//   });
// }
// New button hover event to toggle frame visibility
document.getElementById("penlink").addEventListener("mouseover", function () {
    frame.style.display = "block";
  });
  
  document.getElementById("penlink").addEventListener("mouseout", function () {
    frame.style.display = "none";
  });
  
  gsap.set("#cursor", { xPercent: -50, yPercent: -50 });
  const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const mouse = { x: pos.x, y: pos.y };
  const speed = 0.35;
  
  const xSet = gsap.quickSetter(cursor, "x", "px");
  const ySet = gsap.quickSetter(cursor, "y", "px");
  
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });
  
  gsap.ticker.add(() => {
    const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
  
    pos.x += (mouse.x - pos.x) * dt;
    pos.y += (mouse.y - pos.y) * dt;
    xSet(pos.x);
    ySet(pos.y);
  });
  
  Splitting();
  
  // Individual section scroll progress
  gsap.utils.toArray(".panel").forEach((section, index) => {
    gsap.to(this, {
      scrollTrigger: {
        trigger: section,
        start: "top 100%",
        end: "bottom 25%",
        scrub: 0,
        onUpdate: (self) => {
          section.style.setProperty("--progress", self.progress);
        }
      }
    });
  });
  
  // Full page scroll progress
  gsap.to("body", {
    scrollTrigger: {
      trigger: "body",
      start: "top 100%",
      end: "50% 50%",
      scrub: 0,
      onUpdate: (self) => {
        body.style.setProperty("--progress", self.progress);
      }
    }
  });
  
  // Pull out the preloader
  document.addEventListener("DOMContentLoaded", function () {
    body.classList.add("loaded");
  });
  
  // Set a delay on Scrolltrigger recalculation to accommodate element transition times
  function refresh() {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 2500);
  }
  
  window.addEventListener("resize", refresh);
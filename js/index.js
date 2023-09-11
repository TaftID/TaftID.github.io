/* ---- JavaScript Array ---- */

// const names = [];
// names.push("Aurora");
// names.push("Bill", "Tom");
// names.push("Joseph", "Daniel", "James");

// delete names[1];

// console.table(names);

// names[1] = "Mary";

// console.table(names);

// names.push(["Michael", "Sally", "Warren"], ["No.1", "No.2", "No.3"]);

// console.table(names);

/* ---------------------------------------------------------------- */

/* ---- JavaScript Object ---- */

// // First Method
// const person1 = {};

// person1["name"] = "John";
// person1["age"] = 19;
// person1["gender"] = "Man";

// console.table(person1);

// delete person1["name"];

// console.table(person1);

// person1["name"] = "Bob";

// console.table(person1);
// console.info("My name is " + person1.name + ". Im " + person1.age + " years old, " + "and im a " + person1.gender + ".");

// // Second Method
// const person2 = {
//   "first name": "Daniel",
//   "last name": "Parker",
//   age: 20,
//   gender: "Man",
// };

// console.table(person2);
// console.info("First name\t: " + person2["first name"]);
// console.info("Last name\t\t: " + person2["last name"]);
// console.info("Full name\t\t: " + person2["first name"] + " " + person2["last name"]);

/* ---------------------------------------------------------------- */

/* JavaScript Typeof Operator */

// let data = true;
// let typeData = typeof data;

// console.info(typeData);

// if (typeof data === "") {
//   console.info("Correct");
// } else {
//   console.info("Invalid");
// }

/* ---------------------------------------------------------------- */

/* JavaScript In Operator */

// const person = {
//   "first name": "George",
//   "last name": "Washington"
// }

// if ("first name" in person) {
//   console.info("Correct");
// } else {
//   console.info("Invalid");
// }

// const names = ["John", "Daniel", "Michael"];
// const result = 0 in names;

// console.info(result);

/* ---------------------------------------------------------------- */

/* JavaScript Nullish Coalescing Operator */

// let myQuotes;
// let data = myQuotes;

// if (data == null || data === undefined) {
//   data = "Default value"
// }

// console.info(data);


// // Dot Cursor
const dotCursor = document.querySelector('.dot-cursor');

function showCursor() {
  dotCursor.classList.remove('hidden');
}

function addHoveringClass() {
  dotCursor.classList.add('hovering');
}

function removeHoveringClass() {
  dotCursor.classList.remove('hovering');
}

window.addEventListener('mousemove', () => {
  showCursor();
});

document.querySelectorAll('.hovered').forEach((link) => {
  link.addEventListener('mouseenter', addHoveringClass);
  link.addEventListener('mouseleave', removeHoveringClass);
});

window.addEventListener('pointermove', (e) => {
  const postY = e.clientY;
  const postX = e.clientX;

  dotCursor.style.top = `${postY}px`;
  dotCursor.style.left = `${postX}px`;

  dotCursor.animate({
    top: `${postY}px`,
    left: `${postX}px`
  }, {
    duration: 600,
    fill: 'forwards'
  });
});


// Toggle Button
const btn = document.querySelector('.toggle-btn');
const menu = document.querySelector('.toggle-menu');

btn.onclick = (e) => {
  btn.classList.toggle('is-active');
  menu.classList.toggle('is-active');

  e.preventDefault();
};

const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.querySelector('.toggle-menu');
    btn.classList.remove('is-active');
    menu.classList.remove('is-active');
  });
});


// Lenis
const lenis = new Lenis();

lenis.on('scroll', (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


// GSAP & ScrollTrigger



// Accordion
let acc = document.getElementsByClassName('accordion-btn');

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function() {
    this.classList.toggle('active');
    let panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}


// Swiper
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  speed: 500,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1920: {
      slidesPerView: 3,
    },
  },
});
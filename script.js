// ---------------------------
// SMOOTH SCROLL FOR NAVBAR
// ---------------------------
document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ---------------------------
// HERO SECTION
// ---------------------------
const heroParagraph = document.querySelector('.hero-text p');
const heroText = heroParagraph.dataset.text;
heroParagraph.innerText = '';

let i = 0;
function typeHeroParagraph() {
  if(i < heroText.length) {
    heroParagraph.innerHTML += heroText.charAt(i) === '\n' ? '<br>' : heroText.charAt(i);
    i++;
    setTimeout(typeHeroParagraph, 40);
  }
}

const heroHeading = document.querySelector('.hero-text .sway');
const heroHeadingText = heroHeading.dataset.text;
heroHeading.innerText = '';
let k = 0;
let headingForward = true;

function loopHeroHeading() {
  if(headingForward) {
    heroHeading.innerText = heroHeadingText.slice(0,k);
    k++;
    if(k > heroHeadingText.length) headingForward = false;
  } else {
    heroHeading.innerText = heroHeadingText.slice(0,k);
    k--;
    if(k < 0) headingForward = true;
  }
  setTimeout(loopHeroHeading, 150);
}

// ---------------------------
// ABOUT US CARDS HEADING TYPING
// ---------------------------
const aboutHeadings = document.querySelectorAll('.card .card-heading');

aboutHeadings.forEach(heading => {
  const text = heading.dataset.text;
  let j = 0;
  let typingForward = true;

  function loopTyping() {
    if(typingForward) {
      heading.innerText = text.slice(0,j);
      j++;
      if(j > text.length) typingForward = false;
    } else {
      heading.innerText = text.slice(0,j);
      j--;
      if(j < 0) typingForward = true;
    }
    setTimeout(loopTyping, 150);
  }

  loopTyping();
});

// ---------------------------
// INIT
// ---------------------------
window.addEventListener('DOMContentLoaded', () => {
  typeHeroParagraph();
  loopHeroHeading();
});
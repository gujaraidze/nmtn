var dots = document.querySelectorAll('.spd-btn');
var indicators = document.querySelectorAll('.act-page-indicator');
const scrolDown = document.getElementsByClassName('.hero__scroll');



function setActive(id) {
  dots.forEach(function (dot, index) {
    var isActive = dot.dataset.target === id;

    dot.classList.toggle('is-active', isActive);

    if (isActive) {
      dot.setAttribute('aria-current', 'location');
    } else {
      dot.removeAttribute('aria-current');
    }

    if (indicators[index]) {
      indicators[index].classList.toggle('active-page', isActive);
    }
  });
}

// Track the currently visible section
ScrollOut({
  targets: '.spd-section',
  threshold: 0.5,

  onShown: function (el) {
    setActive(el.id);
  }
});


// Click a dot to navigate to a section
dots.forEach(function (dot) {
  dot.addEventListener('click', function () {
    var target = document.getElementById(dot.dataset.target);

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});


const scrollDown = document.querySelector('.hero__scroll');

scrollDown.addEventListener('click', function () {
  document.getElementById('s1').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});



const siteHeaderBar = document.querySelector('.site-header__bar');
let lastScrollY = window.scrollY;
let scrollTicking = false;

function updateHeaderVisibility() {
  const currentScrollY = window.scrollY;
  const menuIsOpen = document.querySelector('#menuCheckbox')?.checked;
  const scrollingDown = currentScrollY > lastScrollY;

  if (currentScrollY <= 80 || !scrollingDown || menuIsOpen) {
    siteHeaderBar.classList.remove('is-hidden');
  } else {
    siteHeaderBar.classList.add('is-hidden');
  }

  lastScrollY = currentScrollY;
  scrollTicking = false;
}

window.addEventListener('scroll', function () {
  if (!scrollTicking) {
    window.requestAnimationFrame(updateHeaderVisibility);
    scrollTicking = true;
  }
}, { passive: true });








// Initial state
setActive('hero');
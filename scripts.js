var dots = document.querySelectorAll('.spd-btn');
var indicators = document.querySelectorAll('.act-page-indicator');

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

// Initial state
setActive('hero');
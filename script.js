// mobile nav bar
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-230px";
}

// light theme

var icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    icon.src = "images/moon.png";
  } else {
    icon.src = "images/sun.png";
  }
};

// form submition
const scriptURL =
  "https://script.google.com/macros/s/AKfycbyAPVS4q8Dj7tFLDTg9wMS1EfRg_8R149GgwNGlU1fLcfbduuDO4jy2DhbImN1Co-fE3w/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message Sent Successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

// scroll reveal

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 1500,
  delay: 200,
});

if (window.innerWidth >= 600) {
  ScrollReveal().reveal(".squares", { mobile: false });

  ScrollReveal().reveal(
    ".home-content, .sub-title, .mh-professional-skills h3",
    {
      origin: "top",
    }
  );
  ScrollReveal().reveal(
    ".home-img, .about_data, .tab-titles, .tab-content, .button, contact-right, form",
    {
      origin: "bottom",
    }
  );
  ScrollReveal().reveal(
    ".about-col-1, .social-icons .fas, .fab, .contact-left p, .contact-left a, .each-skills",
    {
      origin: "left",
    }
  );
  ScrollReveal().reveal(".mh-professional-progress", { origin: "right" });
} else {
  ScrollReveal().reveal(".squares", { mobile: false });

  ScrollReveal().reveal(".home-content, .mh-professional-skills h3", {
    origin: "top",
  });
  ScrollReveal().reveal(".home-img, .about_data, .tab-titles, .tab-content", {
    origin: "bottom",
  });
  ScrollReveal().reveal(".about-col-1, .social-icons .fas, .each-skills", {
    origin: "left",
  });
  ScrollReveal().reveal(".mh-professional-progress", { origin: "right" });
}

// typed js.

const typed = new Typed(".multiple-text", {
  strings: ["Website Developer", "Webapp Developer"],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
});

function hide() {
  let button = document.getElementById("showHideButton");
  button.addEventListener("click", function () {
    let hide = document.getElementById("my-work");
    let unhide = document.getElementById("label");
    if (hide.style.display === "none") {
      hide.style.display = "flex";
      unhide.textContent = "See Less";
    } else {
      hide.style.display = "none";
      unhide.textContent = "See More";
    }
  });
}
hide();

//----------- progress bar animation ---------------

const progressBarElements = document.querySelectorAll(".percentagem");

function animateProgressBarOnScroll() {
  progressBarElements.forEach((progressBar) => {
    const progressBarTop = progressBar.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (progressBarTop < windowHeight) {
      progressBar.classList.add("animated");
    } else {
      progressBar.classList.remove("animated");
    }

    const progressBarBottom = progressBar.getBoundingClientRect().bottom;
    if (progressBarBottom > 0 && progressBarBottom < windowHeight) {
      progressBar.classList.add("animated");
    } else {
      progressBar.classList.remove("animated");
    }
  });
}
animateProgressBarOnScroll(); // Run the animation on page load

window.addEventListener("scroll", animateProgressBarOnScroll); // Run the animation when scrolling

//------ circular progress bar animation ---------

const progressBars = document.querySelectorAll('[role="progressbar"]');

window.addEventListener("scroll", function () {
  for (const progressBar of progressBars) {
    const progressBarTop = progressBar.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (progressBarTop < windowHeight) {
      progressBar.classList.add("is-animating");
    } else {
      progressBar.classList.remove("is-animating");
    }

    const progressBarBottom = progressBar.getBoundingClientRect().bottom;

    if (progressBarBottom > 0 && progressBarBottom < windowHeight) {
      progressBar.classList.add("is-animating");
    } else {
      progressBar.classList.remove("is-animating");
    }
  }
});

//--------- for contact scrolling animation -----------

if (window.innerWidth <= 600) {
const progressBarElementss = document.querySelectorAll(".animate-on-scroll");

function AnimateProgressBarOnScroll() {
  progressBarElementss.forEach((progressBar) => {
    const progressBarTop = progressBar.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (progressBarTop < windowHeight) {
      progressBar.classList.add("animations");
    } else {
      progressBar.classList.remove("animations");
    }

    const progressBarBottom = progressBar.getBoundingClientRect().bottom;
    if (progressBarBottom > 0 && progressBarBottom < windowHeight) {
      progressBar.classList.add("animations");
    } else {
      progressBar.classList.remove("animations");
    }
  });
}

// Run the animation on page load
AnimateProgressBarOnScroll();

// Run the animation when scrolling
window.addEventListener("scroll", AnimateProgressBarOnScroll);
}

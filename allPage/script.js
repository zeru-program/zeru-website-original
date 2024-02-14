// navbar system
const navClicks = document.querySelectorAll(".link-item");
navClicks.forEach(navClick => {
    navClick.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        navClick.classList.add("active");
    })
});
var valueBar = false;
function changeImgNav() {
  if (valueBar) {
const navLinks = document.querySelector(".nav-links");
    const getNavOn = document.querySelector(".bar-nav");
    getNavOn.src = "menu.png";
    navLinks.classList.remove("act-link");
  } else {
const navLinks = document.querySelector(".nav-links");
    const getNavOn = document.querySelector(".bar-nav");
    getNavOn.src = "cross.png";
    navLinks.classList.add("act-link");
  }
  valueBar = !valueBar;
}
const toHome = document.getElementById('toHome');
const toAbout = document.getElementById('toAbout');
const toSkils = document.getElementById('toSkils');
const toPortofolio = document.getElementById('toPortofolio');
const toContact = document.getElementById('toContact');

toHome.onclick = function () {
  window.location.href = "#home";
}
toSkils.onclick = function () {
  window.location.href = "#skils";
}
toAbout.onclick = function () {
  window.location.href = "#about";
}
toPortofolio.onclick = function () {
  window.location.href = "#portofolio";
}
toContact.onclick = function () {
  window.location.href = "#contact";
}
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".container");
    const navLinks = document.querySelectorAll(".link-item");

    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 50;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                currentSection = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.id === `to${currentSection.charAt(0).toUpperCase() + currentSection.slice(1)}`) {
                link.classList.add("active");
            }
        });
    });
});

// shorcut code
document.addEventListener('keydown', function (e) {
  if(e.altKey && e.key === 'N' || e.key === 'n') {
    const navLinks = document.querySelector(".nav-links");
    const getNavOn = document.querySelector(".bar-nav");
    getNavOn.src = "cross.png";
    navLinks.classList.add("act-link");
  }
  if(e.altKey && e.key === 'C' || e.key === 'c') {
    const navLinks = document.querySelector(".nav-links");
    const getNavOn = document.querySelector(".bar-nav");
    getNavOn.src = "menu.png";
    navLinks.classList.remove("act-link");
  }
});

// system scrolling 
var logo = document.querySelector('.logo-home-isi');
var title = document.getElementById('homeTitle');
var subtitle = document.getElementById('homeSubtitle');
var aboutContainer = document.getElementById('about');
var aboutTitle = document.getElementById('aboutTitle');
var aboutSubtitle = document.getElementById('aboutSubtitle');
var skilsContainer = document.getElementById('skils');
var skilTitle = document.getElementById('skilTitle');
var btnTalk = document.querySelector('.btn-talk');
var lastScrollTop = 0;
var isLogoTranslated = false;

document.addEventListener('DOMContentLoaded', function () {
  logo.style.animation = 'trasl 1.5s ease';
    title.style.animation = 'traslRight 1s ease';
    subtitle.style.animation = 'traslRight 2s ease';
    btnTalk.style.animation = 'traslRight 2.5s ease';
})

window.addEventListener('scroll', function() {
  var currentScrollTop = window.scrollY || window.pageYOffset;

  if (currentScrollTop > lastScrollTop) {
    handleScrollDown(currentScrollTop);
  }
  if (currentScrollTop < lastScrollTop) {
    handleScrollUp();
  }

  lastScrollTop = currentScrollTop;
});
function handleScrollDown(currentScrollTop) {
  // Only trigger when currentScrollTop is greater than 40% of the viewport height
  if (currentScrollTop > window.innerHeight * 0.4) {
    if (!isLogoTranslated) {
      console.log("Scrolling down!");
      logo.style.animation = 'traslOut 1.5s ease';
      title.style.animation = 'traslRightOut 1s ease';
      subtitle.style.animation = 'traslRightOut 2s ease';
      btnTalk.style.animation = 'traslRightOut 2.5s ease';
      logo.classList.add('translated');
      title.classList.add('translatedRight');
      subtitle.classList.add('translatedRight');
      btnTalk.classList.add('translatedRight');
      isLogoTranslated = true;
    }
  }

  if (currentScrollTop > aboutContainer.offsetTop - window.innerHeight * 0.3) {
    setTimeout(function() {
      aboutTitle.style.animation = "fadeInDown 1s ease";
    aboutTitle.classList.remove('translateAbout');
    }, 500);
    setTimeout(function() {
    aboutSubtitle.classList.remove('translateAbout');
    }, 1000);
  }
  
if (currentScrollTop > skilsContainer.offsetTop - window.innerHeight / 2) {
    skilTitle.style.animation = "backInLeft 1.5s ease";
  }
}
function handleScrollUp() {
  if (isLogoTranslated) {
    console.log("Scrolling up!");
    logo.style.animation = 'trasl 1.5s ease';
    title.style.animation = 'traslRight 1s ease';
    subtitle.style.animation = 'traslRight 2s ease';
    btnTalk.style.animation = 'traslRight 2.5s ease';
    logo.classList.remove('translated');
    title.classList.remove('translatedRight');
    subtitle.classList.remove('translatedRight');
    btnTalk.classList.remove('translatedRight');
    isLogoTranslated = false;
  }
}

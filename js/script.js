//menu phone
let closeMenu = document.getElementsByClassName("closeMenu")[0];
let checkinput = document.querySelector("input[id='menu']");
closeMenu.addEventListener("click", () => {
  checkinput.checked = false;
});
//newslatter
function newslatter(e) {
  e.preventDefault();
  let newslatter = document
    .getElementById("newslatterOverlay")
    .classList.toggle("active");
}

//slider principale
let slidePrincipale = (function () {
  self = {};
  self.timeInterval = 4000;
  let current = 0;
  let slides = document.querySelectorAll("#sliderPrincipale .conteneur li");
  let navs = document.querySelectorAll("#sliderPrincipale .navigation li");
  let largeurPage = document.querySelector("#sliderPrincipale").offsetWidth;
  let interval;

  //croll avec click
  function setcalculTaille() {
    //voir si la taille de lécran an changer  pour recalcluler les tailles des éléments
    window.addEventListener("resize", () => {
      largeurPage = document.querySelector("#sliderPrincipale").offsetWidth;
      scrollclick();
    });
  }

  function images() {
    slides.forEach((slide) => {
      let img = slide.getElementsByTagName("img")[0];
      slide.style.background =
        "url('" + img.getAttribute("src") + "') no-repeat center / cover";
    });
  }
  function activeClass(i) {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    navs.forEach((nav) => {
      nav.classList.remove("active");
    });
    slides[i].classList.add("active");
    navs[i].classList.add("active");
  }
  function translate(i) {
    document.querySelector("#sliderPrincipale .conteneur").style.transform =
      "translateX(-" + i * largeurPage + "px)";
  }

  function scrollclick() {
    navs.forEach((nav, i) => {
      nav.addEventListener("click", function (e) {
        current = i;
        activeClass(i);
        translate(i);
      });
    });
  }
  function scrollAuto() {
    interval = setInterval(() => {
      current++;
      if (current >= slides.length) {
        current = 0;
      }
      activeClass(current);
      translate(current);
    }, self.timeInterval);
  }
  function scrollSlider() {
    document
      .querySelectorAll("#sliderPrincipale .conteneur a")
      .forEach((elmt) => {
        elmt.addEventListener("scroll", () => {
          alert("nana");
        });
      });
  }
  function clearSlide() {
    /*
    document
      .querySelectorAll("#sliderPrincipale .conteneur a")
      .forEach((slide) => {
        slide.addEventListener("mouseover", () => {
          clearInterval(interval);
        });
        slide.addEventListener("mouseout", () => {
          alert("bb");
          scrollAuto();
        });
      });
      */
  }
  self.execute = function () {
    images();
    setcalculTaille();
    scrollclick();
    scrollSlider();
    scrollAuto();
    clearSlide();
  };
  return self;
})();
slidePrincipale.execute();
//galerie
let galerie = (function () {
  self = {};
  let nextDom = document.getElementById("next");
  let prevDom = document.getElementById("prev");

  let carouselDom = document.querySelector(".carousel");
  let SliderDom = carouselDom.querySelector(".carousel .list");
  let thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
  let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
  let timeDom = document.querySelector(".carousel .time");

  thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
  let timeRunning = 3000;
  let timeAutoNext = 7000;
  let runTimeOut;
  let runNextAuto;

  function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
    let thumbnailItemsDom = document.querySelectorAll(
      ".carousel .thumbnail .item"
    );

    if (type === "next") {
      SliderDom.appendChild(SliderItemsDom[0]);
      thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
      carouselDom.classList.add("next");
    } else {
      SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
      thumbnailBorderDom.prepend(
        thumbnailItemsDom[thumbnailItemsDom.length - 1]
      );
      carouselDom.classList.add("prev");
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      carouselDom.classList.remove("next");
      carouselDom.classList.remove("prev");
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
      next.click();
    }, timeAutoNext);
  }

  self.execute = function () {
    nextDom.onclick = function () {
      showSlider("next");
    };
    prevDom.onclick = function () {
      showSlider("prev");
    };
    runNextAuto = setTimeout(() => {
      next.click();
    }, timeAutoNext);
  };
  return self;
})();
galerie.execute();

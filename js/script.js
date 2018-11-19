let aboutImg = document.getElementsByClassName("profile-img"),
  abouttitle = document.getElementsByClassName("about-title"),
  p = document.getElementsByClassName("description"),
  skills = document.getElementsByClassName("skill-description"),
  snsIcons = document.getElementsByClassName("social-icons"),
  btn = document.getElementsByClassName("message-btn"),
  tl = new TimelineLite();

tl.from(aboutImg, 1, {
  x: -100,
  autoAlpha: 0,
  ease: Power1.easeInOut,
  delay: 0.8
})
  .from(
    abouttitle,
    0.5,
    { y: 15, autoAlpha: 0, ease: Power0.easeIn },
    "-= 0.15"
  )
  .from(p, 0.5, { y: 15, autoAlpha: 0, ease: Power0.easeIn }, "-= 0.15")
  .from(skills, 0.5, { y: 15, autoAlpha: 0, ease: Power0.easeIn }, "-= 0.15")
  .from(snsIcons, 0.5, { y: 15, autoAlpha: 0, ease: Power0.easeIn }, "-= 0.15")
  .from(btn, 0.5, { y: 15, autoAlpha: 0, ease: Power0.easeIn }, "-= 0.15");

let workImg = document.getElementsByClassName("work-img-one"),
  workTitle = document.getElementsByClassName("work-title"),
  workp = document.getElementsByClassName("work-description"),
  btnworks = document.getElementsByClassName("work-btn"),
  newtl = new TimelineLite();

newtl

  .from(workTitle, 0.5, {
    y: 15,
    autoAlpha: 0,
    ease: Power0.easeIn,
    delay: 0.8
  })
  .from(workp, 0.5, { y: 15, autoAlpha: 0, ease: Power0.easeIn }, "-= 0.15")
  .from(btnworks, 0.5, { y: 15, autoAlpha: 0, ease: Power0.easeIn }, "-= 0.15")
  .from(workImg, 1, { y: 15, autoAlpha: 0, ease: Power1.easeIn }, "-= 0.15");

let slideSec = document.getElementsByClassName("slide-section");
sectionTween = TweenLite.fromTo(
  slideSec,
  1,
  {
    // ease: Power3.easeInOut,
    opacity: 0,
    scale: 0.8
  },
  {
    opacity: 1,
    scale: 1
  }
  // onCompleteParams: [element, 'param2']
);

jQuery(function() {
  jQuery(window).scroll(function() {
    jQuery(".fadein").each(function() {
      var elemPos = jQuery(this).offset().top;
      var scroll = jQuery(window).scrollTop();
      var windowHeight = jQuery(window).height();
      if (scroll > elemPos - windowHeight + 100) {
        jQuery(this).addClass("scrollin");
      }
    });
  });
});

jQuery(document).ready(function($) {
  var $section = $(".scroll-section"); // 各スライド
  var $pager = $("#js-pager");
  // scrollifyのオプション設定

  var option = {
    section: ".scroll-section",
    easing: "swing",
    scrollSpeed: 600,
    scrollbars: true,
    before: function(index) {
      pagerCurrent(index);
    },
    afterRender: function() {
      createPager(); // ページャーの作成
    }
  };

  $(function() {
    $.scrollify(option);
  });

  // ==============================
  // functions
  // ------------------------------

  function pagerCurrent(index = 0) {
    var $li = $pager.find("li");
    $li.removeClass("is-current");
    $li.eq(index).addClass("is-current");
  }

  function createPager() {
    $section.each(function(i, e) {
      var sectionName = $(e).attr("data-section-name");
      var addClass = "";
      if (i === 0) {
        addClass = "is-current";
      }

      var html = "";
      html += '<li class="' + addClass + '">';
      html += '<a href="#' + sectionName + '"></a>';
      html += "</li>";
      $pager.append(html);
    });
  }
});

var btns = document.querySelectorAll(".js-btn");
var duration = 0.8;
var isAnimating = false;

addEventListenerList(btns, "click", function(e) {
  if (!isAnimating) {
    switchPages(e.currentTarget.dataset.out, e.currentTarget.dataset.in);
  }
});

function switchPages(outFn, inFn) {
  isAnimating = true;
  window[outFn](document.querySelector(".is-current"));
  window[inFn](document.querySelector(".js-page:not(.is-current)"));
}

function scaleUp(el) {
  addClass(el, "is-current");
  TweenLite.fromTo(
    el,
    duration,
    {
      opacity: 0,
      scale: 0.8
    },
    {
      opacity: 1,
      scale: 1,
      clearProps: "opacity, scale"
    }
  );
}

function moveToRight(el) {
  addClass(el, ["is-onTop", "is-current"]);
  TweenLite.fromTo(
    el,
    duration,
    {
      xPercent: 0
    },
    {
      xPercent: -100,
      clearProps: "xPercent",
      onComplete: function() {
        removeClass(el, ["is-onTop", "is-current"]);
        isAnimating = false;
      }
    }
  );
}

// utils
function addClass(el, className) {
  [].concat(className).forEach(function(n) {
    el.classList.add(n);
  });
}

function removeClass(el, className) {
  [].concat(className).forEach(function(n) {
    el.classList.remove(n);
  });
}

function addEventListenerList(list, event, fn) {
  for (var i = 0, len = list.length; i < len; i++) {
    list[i].addEventListener(event, fn, false);
  }
}

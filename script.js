// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
    nav.style.cssText = `box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.2), 0 4px 4px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.1), 0 16px 16px rgba(0, 0, 0, 0.05);`
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
    nav.style.cssText = `box-shadow: none`
  }
}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflow = "auto";
    scrollBtn.style.pointerEvents = "auto";
  });
}
// -------------------------------- portfolio

function portfolio(){
  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
  });
  $('#portfolio-filter li').on('click', function () {
    $("#portfolio-filter li").removeClass('filter-active');
    $(this).addClass('filter-active');
    console.log($(this));
    portfolioIsotope.isotope({filter: $(this).data('filter')});
  });
}

portfolio()
// -------------------------------- Skills Fliping
// $(".skill").hover(function(){
//     $(this).css("transform","scale(1.03, 1.03);");
//   console.log($(this).css("transform"));
//   },function(){
//     $(this).css("transform","scale(1.0, 1.0);")
//   }
//   );
  $(".skill").click(function(){
    console.log("ok");
    $(this).toggleClass("rotating")
  })
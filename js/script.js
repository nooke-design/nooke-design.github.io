/*--Burger-----------------------------------------------------------------------------------------------*/ 
 
let menuBtn = document.querySelector('.menu-btn'); 
let menu = document.querySelector('.menu'); 
 
menuBtn.addEventListener('click', function(){ 
 menuBtn.classList.toggle('active'); 
 menu.classList.toggle('active'); 
}) 
 
/*--Scroll Animation 1-----------------------------------------------------------------------------------*/ 
 
function onEntry(entry) { 
    entry.forEach(change => { 
      if (change.isIntersecting) { 
        change.target.classList.add('element-show'); 
      } 
    }); 
  } 
 
  let options = { threshold: [0.5] }; 
  let observer = new IntersectionObserver(onEntry, options); 
  let elements = document.querySelectorAll('.main_header'); 
  for (let elm of elements) { 
    observer.observe(elm); 
  } 
  let options2 = { threshold: [0.5] }; 
  let observer2 = new IntersectionObserver(onEntry, options2); 
  let elements2 = document.querySelectorAll('.text_on_bg'); 
  for (let elm of elements2) { 
    observer2.observe(elm); 
  } 
  let options3 = { threshold: [0.5] }; 
  let observer3 = new IntersectionObserver(onEntry, options3); 
  let elements3 = document.querySelectorAll('.text_on_bg2'); 
  for (let elm of elements3) { 
    observer3.observe(elm); 
  } 
  let options4 = { threshold: [0.5] }; 
  let observer4 = new IntersectionObserver(onEntry, options4); 
  let elements4 = document.querySelectorAll('.scroll_btn'); 
  for (let elm of elements4) { 
    observer4.observe(elm); 
  } 
  let options5 = { threshold: [0.5] }; 
  let observer5 = new IntersectionObserver(onEntry, options5); 
  let elements5 = document.querySelectorAll('.main_block_2'); 
  for (let elm of elements5) { 
    observer5.observe(elm); 
  } 
  let options6 = { threshold: [0.5] }; 
  let observer6 = new IntersectionObserver(onEntry, options6); 
  let elements6 = document.querySelectorAll('.main_block_3'); 
  for (let elm of elements6) { 
    observer6.observe(elm); 
  } 
  let options7 = { threshold: [0.5] }; 
  let observer7 = new IntersectionObserver(onEntry, options7); 
  let elements7 = document.querySelectorAll('.block4_1'); 
  for (let elm of elements7) { 
    observer7.observe(elm); 
  } 
  let options8 = { threshold: [0.5] }; 
  let observer8 = new IntersectionObserver(onEntry, options8); 
  let elements8 = document.querySelectorAll('.block4_3'); 
  for (let elm of elements8) { 
    observer8.observe(elm); 
  } 
  let options9 = { threshold: [0.5] }; 
  let observer9 = new IntersectionObserver(onEntry, options9); 
  let elements9 = document.querySelectorAll('.block4_2'); 
  for (let elm of elements9) { 
    observer9.observe(elm); 
  } 
  let options10 = { threshold: [0.5] }; 
  let observer10 = new IntersectionObserver(onEntry, options10); 
  let elements10 = document.querySelectorAll('.scroll_animation'); 
  for (let elm of elements10) { 
    observer10.observe(elm); 
  } 
  let options11 = { threshold: [0.5] }; 
  let observer11 = new IntersectionObserver(onEntry, options11); 
  let elements11 = document.querySelectorAll('.scroll_animation2'); 
  for (let elm of elements11) { 
    observer11.observe(elm); 
  } 
 
/*--Count----------------------------------------------------------------------------------*/ 
 
  var number = document.querySelector('.number'), 
  numberTop = number.getBoundingClientRect().top, 
  start = +number.innerHTML, end = +number.dataset.max; 
 
  window.addEventListener('scroll', function onScroll() { 
   if(window.pageYOffset > numberTop - window.innerHeight / 2) { 
    this.removeEventListener('scroll', onScroll); 
    var interval = setInterval(function() { 
     number.innerHTML = ++start; 
     if(start == end) { 
      clearInterval(interval); 
     } 
    }, 1); 
   } 
  }); 
 
    var number1 = document.querySelector('.number2'), 
  number1Top = number1.getBoundingClientRect().top, 
  start1 = +number1.innerHTML, end1 = +number1.dataset.max; 
 
  window.addEventListener('scroll', function onScroll() { 
   if(window.pageYOffset > number1Top - window.innerHeight / 1)

{ 
    this.removeEventListener('scroll', onScroll); 
    var interval1 = setInterval(function() { 
     number1.innerHTML = ++start1; 
     if(start1 == end1) { 
      clearInterval(interval1); 
     } 
    }, 40); 
   } 
  }); 
 
  var number2 = document.querySelector('.number3'), 
  number2Top = number2.getBoundingClientRect().top, 
  start2 = +number2.innerHTML, end2 = +number2.dataset.max; 
 
  window.addEventListener('scroll', function onScroll() { 
   if(window.pageYOffset > number2Top - window.innerHeight / 1) { 
    this.removeEventListener('scroll', onScroll); 
    var interval2 = setInterval(function() { 
     number2.innerHTML = ++start2; 
     if(start2 == end2) { 
      clearInterval(interval2); 
     } 
    }, 300); 
   } 
  });

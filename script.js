var text2 = document.querySelector('.text2');

var loadText = ()=>{
    setTimeout(()=>{
        text2.textContent = "Software Engineer";
    },0)
    setTimeout(()=>{
        text2.textContent = "Web Developer";
    },4000)
    setTimeout(()=>{
        text2.textContent = "UI/UX Designer";
    },8000)
    setTimeout(()=>{
        text2.textContent = "Graphic Designer";
    },12000)
}

loadText();
setInterval(loadText,16000);

//Collapse Navbar
var collapseBtn = document.querySelector(".fa-bars");
var navbar = document.getElementById("navbar");
collapseBtn.addEventListener('click',()=>{
  navbar.classList.toggle("hidemenu");
})

//About Secton btn
var skill = document.querySelector('.skill');
var experience = document.querySelector('.experience');
var education = document.querySelector('.education');

var slide1 = document.querySelector('.slide1');
var slide2 = document.querySelector('.slide2');
var slide3 = document.querySelector('.slide3');

skill.addEventListener('click',()=>{
    slide1.style.display = "block";
    slide2.style.display = "none";
    slide3.style.display = "none";

    skill.style.color = "#ff9900";
    experience.style.color = "#fff";
    education.style.color = "#fff";
})
experience.addEventListener('click',()=>{
    slide1.style.display = "none";
    slide2.style.display = "block";
    slide3.style.display = "none";

    experience.style.color = "#ff9900";
    skill.style.color = "#fff";
    education.style.color = "#fff";
})
education.addEventListener('click',()=>{
    slide1.style.display = "none";
    slide2.style.display = "none";
    slide3.style.display = "block";

    education.style.color = "#ff9900";
    skill.style.color = "#fff";
    experience.style.color = "#fff";
})

//-------Swiper JS----------------------
const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    mousewheel: true,
    spaceBetween: 30,
    grabCursor: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  //Responsive
  breakpoints: {
      0: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 2,
      },
      719:{
        slidesPerView: 3,
        spaceBetween: 20,
      }
     
  },
});

// Up Arrow Button
var upArrow = document.querySelector(".upArrow");

window.addEventListener('scroll',()=>{
  if(window.pageYOffset > 100){
    upArrow.style.display = "block";
  }else{
    upArrow.style.display = "none";
  }
})


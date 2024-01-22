
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle= document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


/*===== SHow Menu =======*/
/* Validate of constant exists */
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

/*===== Hide Menu =======*/
/* Validate of constant exists */
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')


function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n =>n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 view port height, add the scroll-header class to teh header tag
    if(this.scrollY >=50) {
        header.classList.add('scroll-header');
    }else{
        header.classList.remove('scroll-header')
    }
    
}

window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is greater than 350 view port height, add the scroll-up class to to page
    if(this.scrollY >=350) {
        scrollUp.classList.add('show-scrollup');
    }else{
        scrollUp.classList.remove('show-scrollup')
    }
    
}

window.addEventListener('scroll', scrollUp)


/*=============== SINGLE PRODUCT CODE FOR ITEMs ===============*/ 
var mainImage = document.getElementById('main-img');
var smallImage = document.getElementsByClassName('sm-img');


// Load seclected images to the source location
smallImage[0].addEventListener('click', () =>{
    mainImage.src = smallImage[0].src;
})
// Writing the code in differrent styles
smallImage[1].onclick = function() {
    mainImage.src = smallImage[1].src;
}
smallImage[2].onclick = function() {
    mainImage.src = smallImage[2].src;
}
smallImage[3].onclick = function() {
    mainImage.src = smallImage[3].src;
}




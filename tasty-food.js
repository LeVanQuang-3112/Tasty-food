/*==================== SHOW MENU ====================*/



const showMenu = function (toggleId, navId) {
  const toggle = document.getElementById(toggleId)
  const nav = document.getElementById(navId)
  
  // Validate that variables exist
  if(toggle && nav){
      toggle.addEventListener('click', function() {
          // We add the show-menu class to the div tag with the nav__menu class
          nav.classList.toggle('show__menu')
      })
  }
}
showMenu('nav__toggle', 'nav__menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav__menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show__menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



// ------ DARK MODE THEME -------- 


const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


// -----------SHOW SCROLL TOP-------------- 

function scrollTop() {
    const scrollTop = document.getElementById('scroll__top')
    if(this.scrollY >= 560) scrollTop.classList.add('show__scroll');
    else scrollTop.classList.remove('show__scroll')
}
window.addEventListener('scroll', scrollTop)

// ------------ scroll animation----------   

const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .service__content, .menu__box,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`, {
    interval: 200
})

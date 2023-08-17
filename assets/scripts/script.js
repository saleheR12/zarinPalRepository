  const nav = document.querySelector('nav')

  window.addEventListener('scroll', () => {
      if (scrollY > 0) {
          nav.classList.add('sticky');
      } else {
          nav.classList.remove('sticky');
      }

      //   nav.style.borderBottom = '1px solid #E5E5E5'
  })


  // *************************************************
  const accordion = document.querySelector('.accordion-title')
  const accordionContent = accordion.nextElementSibling;
  accordion.addEventListener('click', function() {

      if (accordionContent.style.height) {
          accordionContent.style.height = null;
      } else {
          accordionContent.style.height = accordionContent.scrollHeight + 'px';

      }
  })

  // -----------------------------------------

  const iconBar = document.querySelector('.icon-Bar');
  const mobileMenu = document.querySelector('.moblie-menu');

  iconBar.addEventListener("click", function() {
      mobileMenu.classList.add('show')
  });
  // -------------------------------------------------
  const iconTimes = document.querySelector('.icon-times');
  console.log(iconTimes);

  iconTimes.addEventListener("click", function() {
      mobileMenu.classList.remove('show')
      accordionContent.style.height = null;
  });
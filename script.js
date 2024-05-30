"use strict"

const nav = document.querySelector(".nav");
const navHeight = nav.getBoundingClientRect().height;
const header = document.querySelector(".header");

nav.addEventListener("click", function(e) {
    console.log(e);
    if(e.target.classList.contains("nav-link")) {
        const section = e.target.getAttribute("href");
        const goTo = document.querySelector(`${section}`)
        goTo.scrollIntoView({behavior: 'smooth'})
        console.log('Yes');
        
    }
})

const stickyNav = (entries) => {
    // Collecting the event
    const [entry] = entries;
    
    // Condition for nav to become sticky
    if (!entry.isIntersecting) {  
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  };
  
  const headerObserver = new IntersectionObserver(stickyNav, {
    root: null, // in relation to viewport
    treshold: 0, // event will fire when 0% of the element begins and finishes intersecting the viewport
    rootMargin: `-${navHeight}px`,
  });
  console.log(headerObserver.observe(header));

  const allSections = document.querySelectorAll('.section')

  const revealSection = function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('section--hidden');
        observer.unobserve(entry.target);
    });
};
  
  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15
  })
  
  allSections.forEach(function(section) {
    sectionObserver.observe(section);
    section.classList.add('section--hidden')
  })
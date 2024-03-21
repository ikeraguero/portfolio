const nav = document.querySelector(".nav");

nav.addEventListener("click", function(e) {
    console.log(e);
    if(e.target.classList.contains("nav-link")) {
        const section = e.target.getAttribute("href");
        const goTo = document.querySelector(`${section}`)
        goTo.scrollIntoView({behavior: 'smooth'})
        console.log('Yes');
        
    }
})
console.log('a');

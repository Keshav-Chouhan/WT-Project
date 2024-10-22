                                       // toggle icon navbar                                   
    let menuIcon = document.querySelector("#menu-icon");
    let navebar = document.querySelector(".navebar");                                
                                   
    menuIcon.onclick = () => {
        menuIcon.classList.toggle("bx-x");
        navebar.classList.toggle("active");

    }
                                   
                                   // scroll section active link

let section = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >=offset && top<offset + height) {
            navLink.forEach(link => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

                                             // sticky navebar

    let header = document.querySelector('header');
    
    header.classList.toggle('sticky', window.scrollY > 100 );
 
                    // remove toggle icon and navebar when click navebar link (scroll)

      menuIcon.classList.remove("bx-x");
      navebar.classList.remove("active"); 

};


                                // scroll reveal

 ScrollReveal({
    //  reset: true,
     distance: '80px',
     duration:2000,
    delay:200 
 });

 ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img , .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-image', { origin: 'left' });
 ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


                                         //  typed JS

 const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer' , 'Java Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
 });
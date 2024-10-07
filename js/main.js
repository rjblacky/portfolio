window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky" , window.scrollY > 0);
});

/// vCard section to veiw certificate and projects//

const serviceModels = document.querySelectorAll(".service-model");
const viewcertificateBtns = document.querySelectorAll(".view-certificate-btn");
const modelCloseBtns = document.querySelectorAll(".model-close-btn");

// Function to open the modal for either certifications or projects
var model = function(modalClick) {
    serviceModels[modalClick].classList.add("active");
}


viewcertificateBtns.forEach((viewcertificateBtn, i) => {
    viewcertificateBtn.addEventListener("click", () => {
        model(i);
    });
});

// Close the modals
modelCloseBtns.forEach((modelCloseBtn) => {
    modelCloseBtn.addEventListener("click", () => {
        serviceModels.forEach((modelView) => {
            modelView.classList.remove("active");
            });
    });
});


//Project section////

const projectModels = document.querySelectorAll(".project-model");
const knowMoreBtns = document.querySelectorAll(".know-more-btn");
const projectCloseBtns = document.querySelectorAll(".project-model-close-btn");

// Function to open the modal for either certifications or projects
var projectmodel = function(modalClick) {
    projectModels[modalClick].classList.add("active");
}


knowMoreBtns.forEach((knowMoreBtns, i) => {
    knowMoreBtns.addEventListener("click", () => {
        projectmodel(i);
    });
});

// Close the modals
projectCloseBtns.forEach((projectCloseBtns) => {
    projectCloseBtns.addEventListener("click", () => {
        projectModels.forEach((projectModelView) => {
            projectModelView.classList.remove("active");
            });
    });
});



//WEBSITE THEME====////
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

// Corrected the contains call
const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if (savedTheme) {
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");  // Changed == to ===
}


//responsive nav toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems =  document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});


navItems.forEach((navItems)=>{
    navItems.addEventListener("click", () =>{
        navigation.classList.remove("active");
    });
});

//scroll to top button

const scrollTopBtn = document.querySelector(".scrolltoTop-btn");
window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click" , () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

});


//Nav menu Item//
window.addEventListener("scroll" , () =>{
    const sections =  document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
        }
        else{
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    });
});


document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.querySelector('input[placeholder="Name"]').value;
    const email = document.querySelector('input[placeholder="E-mail"]').value;
    const subject = document.querySelector('input[placeholder="Subject"]').value;
    const message = document.querySelector('textarea[placeholder="Message"]').value;

    // Validate required fields
    if (!name || !email) {
        alert('Please enter a valid name and email address.');
        return;
    }

    emailjs.send("service_i1itfyf", "template_1c62lbw", {
        name: name,
        email: email,
        subject: subject,
        message: message,
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        
        // Show custom success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = 'Message sent successfully!';
        
        // Append success message to the body
        document.body.appendChild(successMessage);
        
        // Center the message
        successMessage.style.display = 'block'; // Show the message

        // Reset the form
        document.querySelector('.contact-form').reset();
        
        // Remove the message after 3 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 3000); // Remove after 3 seconds
    }, function(error) {
        console.log('FAILED...', error);
        alert('Failed to send message. Please try again.');
    });
});


//scroll to reveal//

ScrollReveal({ 
    reset: true, 
    distance: '60px',
    duration:2500,
    delay:100
});

//reveal

ScrollReveal().reveal('.home .info h2, .wlcm .h1, .section-title-01', { delay:500, origin: 'left' });
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info, .section-title-02', { delay:100, origin: 'right' });
ScrollReveal().reveal('.home .info .btn-containers', { delay:100, origin: 'bottom' });
ScrollReveal().reveal('.media-icons i, .contact-left li', { delay:100, origin: 'left', interval:100 });
ScrollReveal().reveal('.home-img, .about-img',{ delay:500, origin: 'bottom'});
ScrollReveal().reveal('.about .description, .contact-right',{ delay:100, origin: 'right'});
ScrollReveal().reveal('.skills-description, .certifications-description, .contact-card, .contact-left h2',{ delay:100, origin: 'left'});
ScrollReveal().reveal('.internship-card, .project-section .img-card, .education, .certifications-card',{ delay:100, origin: 'bottom', interval:100});
ScrollReveal().reveal('footer .group',{ delay:100, origin: 'top', interval:200});

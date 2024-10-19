
window.onload = function () {
    const navLinks = document.querySelectorAll('.navbar a');
    const checkBox = document.getElementById('check'); 
    const icons = document.querySelector('.icons'); 

    // Smooth scroll and active link functionality
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); 
            navLinks.forEach(nav => nav.classList.remove('active')); 
            this.classList.add('active'); 

            const targetSection = document.querySelector(this.getAttribute('href')); 
            if (targetSection) { 
                targetSection.scrollIntoView({ behavior: 'smooth' }); 
            } 
        }); 
    });

    // Animate progress bars
    const progressBars = document.querySelectorAll('.progress'); 
    progressBars.forEach(bar => { 
        let width = 0; 
        const finalWidth = bar.style.width; 
        bar.style.width = "0%"; 

        const interval = setInterval(() => { 
            if (width >= parseInt(finalWidth)) { 
                clearInterval(interval); 
            } else { 
                width++; 
                bar.style.width = width + "%"; 
            } 
        }, 10); 
    });

    // Show Projects and Work Experience sections 
    const seeMoreBtn = document.querySelector(".btn"); 
    const moreSection = document.getElementById("more"); 
    const workSection = document.getElementById("work"); 

    seeMoreBtn.addEventListener("click", function (event) { 
        event.preventDefault();   
        moreSection.style.display = "block"; 
        workSection.style.display = "block"; 
        seeMoreBtn.style.display = "none"; 
        moreSection.scrollIntoView({ behavior: 'smooth' }); 
    }); 

    // Back Button Functionality 
    const backBtns = document.querySelectorAll('.back-btn'); 

    backBtns.forEach(backBtn => { 
        backBtn.addEventListener("click", function (event) { 
            event.preventDefault(); 
            moreSection.style.display = "none"; 
            workSection.style.display = "none"; 
            seeMoreBtn.style.display = "inline-block"; 

            const aboutSection = document.getElementById("about"); 
            aboutSection.scrollIntoView({ behavior: 'smooth' }); 
        }); 
    }); 

    // For certificates animation 
    const certificates = document.querySelectorAll('.certificate-card'); 
    certificates.forEach((certificate, index) => { 
        setTimeout(() => { 
            certificate.style.opacity = 1; 
            certificate.style.transform = 'translateY(0)'; 
        }, index * 200); 
    }); 
}; 
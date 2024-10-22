window.onload = function () {
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
};


const header = document.querySelector("nav");

window.addEventListener("scroll", function (){
    header.classList.toggle("sticky", window.scrollY > 80)
});


var nav_list = header.getElementsByClassName("nav-list");
for (var i = 0; i < nav_list.length; i++) {
    nav_list[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
  }

 
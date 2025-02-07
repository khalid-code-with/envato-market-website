window.addEventListener("scroll", function () {
    let nav = document.getElementsByClassName("menu_bar")[0];  // Class ko fetch kar rahe hain
    let scrollTop = window.pageYOffset;

    if (scrollTop >= 50) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
});

// move button on top scrolling
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

    // this show the navbar always on top dont need to refresh
    document.addEventListener("click", function () {
      document.getElementById("navbarSupportedContent").classList.add("show");
    });

// animation with window scrolling
    document.addEventListener("DOMContentLoaded", function () {
        AOS.init({
            duration: 1000, // Animation speed (1s)
            once: true,  // Animation sirf ek baar chale (refresh ya first load pe)
            easing: "ease-out"
        });
    });


//   close vidwo on cros open video 
    function openVideo() {
        document.getElementById("video-popup").style.display = "flex";
      }
      function closeVideo() {
        document.getElementById("video-popup").style.display = "none";
      }
      

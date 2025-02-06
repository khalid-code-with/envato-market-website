window.addEventListener("scroll", function () {
    let nav = document.getElementsByClassName("menu_bar")[0];  // Class ko fetch kar rahe hain
    let scrollTop = window.pageYOffset;

    if (scrollTop >= 50) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
});
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
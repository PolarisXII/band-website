function toggleMenu() {
    var menu = document.getElementById("dropdownMenu");
    if (menu.style.display === "flex") {
        menu.style.display = "none";
        menu.style.transform = "translateX(100%)";
    } else {
        menu.style.display = "flex";
        menu.style.transform = "translateX(0)";
    }
}
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

document.querySelectorAll(".menu-item").forEach(item => {
    item.addEventListener('click', function() {
        let pathName = item.textContent.trim();

        if (pathName === "Home") {
            window.location.href = "/";
        } else {
            window.location.href = `/${(pathName)}`;
        }
    });
});



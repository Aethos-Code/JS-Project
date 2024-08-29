// Array med menupunkter og links
const menuItemsArray = [
    { name: "Mad og Drikke", href: "filter.html" },
    { name: "Events", href: "events.html" },
    { name: "Selskaber", href: "selskaber.html" },
    { name: "Magninger", href: "magninger.html" },
    { name: "Info", href: "info.html" }
];

// Hent HTML-elementer
const menuList = document.getElementById("menupunkter");
const burgerMenu = document.getElementById("burger-menu");

// Brug en for-loop til at tilføje menupunkterne dynamisk
for (let i = 0; i < menuItemsArray.length; i++) {
    // Opret et listeelement for hvert menupunkt
    const menuItem = document.createElement("li");
    const menuLink = document.createElement("a");

    // Sæt tekstindhold og href-attribut dynamisk
    menuLink.textContent = menuItemsArray[i].name;
    menuLink.href = menuItemsArray[i].href;

    menuItem.appendChild(menuLink);
    menuList.appendChild(menuItem);
}

// Tilføj en klik-begivenhed til burger-menuen for at toggle menuens synlighed med animation
burgerMenu.addEventListener("click", () => {
    // If-else statement for at toggle menuens synlighed
    if (menuList.classList.contains("show")) {
        menuList.classList.remove("show");
        burgerMenu.innerHTML = "&#9776;"; // Hamburger ikon
    } else {
        menuList.classList.add("show");
        burgerMenu.innerHTML = "&#10005;"; // Kryds ikon (Unicode for kryds)
    }
});

const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

const filterCards = (e) =>{
    document.querySelector(".active").classList.remove(".active");
    e.target.classList.add("active");
    console.log(e.target);

    filterableCards.forEach(card => {
        //tilføjer "hide" for at gemme kortet
        card.classList.add("hide");
        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "alle"){
        card.classList.remove("hide");
        }
    })
};

filterButtons.forEach(button => button.addEventListener("click", filterCards));












console.log(filterButtons, filterableCards);
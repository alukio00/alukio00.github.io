const h3Drop = document.getElementById("h3-dropdown");
const arrowDrop = document.getElementById("dropdown-arrow");
const divider = document.getElementById("div-aparts");

const dropdown = () => {
    console.log("ffffff")
    arrowDrop.classList.toggle("rotate-arrow");
    divider.classList.toggle("hidden");

};

h3Drop.addEventListener("click", dropdown);
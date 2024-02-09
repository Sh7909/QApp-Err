const favElements = document.getElementsByClassName("fav");
const showCountsElements = document.getElementsByClassName("show_counts");
for (let i = 0; i < favElements.length; i++) {
    let counter = 0;
    const fav = favElements[i];
    const showCounts = showCountsElements[i];
    fav.addEventListener('click', (event) => {
        event.preventDefault();
        fav.style.fill = "white";
        counter++;
        showCounts.innerHTML = counter;
    });
}



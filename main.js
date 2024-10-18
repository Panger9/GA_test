let count = 0;
const incrementButtons = document.getElementsByClassName('js-increment-button');

function incrementCount() {
    count++;
    for (let button of incrementButtons) {
        button.innerHTML = count;
    }
}
for (let button of incrementButtons) {
    button.addEventListener("click", incrementCount);
}

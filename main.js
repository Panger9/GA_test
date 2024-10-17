let count = 0;
const incrementButtonHTML = document.getElementById('js-increment-button')

function incrementCount(){
    count++
    incrementButtonHTML.innerHTML = count
}

incrementButtonHTML.addEventListener("click", incrementCount)

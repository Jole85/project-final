let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function red() {
    count += 1
    countEl.textContent = count
}

function finish() {
    let countStr ="🚦" + count + " min"+ "🚦"
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

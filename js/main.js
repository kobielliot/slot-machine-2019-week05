document.getElementById("min").addEventListener('click', min)
document.getElementById("max").addEventListener('click', max)
let Symbols = [ "🍒", "🍋","⭐", "🍊", "🔔"]
console.log(Symbols)
let bank = 1000
//Object and values() is a built in function in Js
let symbolsList = Object.values(Symbols)
console.log(symbolsList)

function randomSelect() {
    return symbolsList[Math.floor(Math.random() * symbolsList.length)]
}

function spin(betAmount) {
    let slot1 = randomSelect()
    let slot2 = randomSelect()
    let slot3 = randomSelect()

    document.getElementById('reelOne').innerText = slot1
    document.getElementById('reelTwo').innerText = slot2
    document.getElementById('reelThree').innerText = slot3

    if(slot1 === slot2 && slot3 === slot2) {
        document.getElementById('results').textContent = "WINNER"
        bank += betAmount
    }
    else {
        document.getElementById('results').textContent = "LOSER"
        bank -= betAmount
        document.getElementById('bank').textContent = bank
    }
}
//betAmount is replaced by value put in parameters in the function spin
function min(){
    spin(50)
    console.log('hello')
}

function max(){
    spin(250)
    console.log('hey')
}
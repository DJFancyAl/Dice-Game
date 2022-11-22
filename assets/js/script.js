// TODO: Declare any global variables we need
const content = document.getElementById('buttons');
const coinImage = document.getElementById('coin-image');
buttons.style.border = '1px solid black';
buttons.style.padding = '15px';
const flipPenny = document.createElement("button");
flipPenny.style.border = '1px solid black'
flipPenny.style.backgroundColor = 'lightblue'
flipPenny.textContent = 'Flip The Penny!'
buttons.append(flipPenny);
const clearScoreboard = document.createElement("button");
clearScoreboard.style.border = '1px solid black'
clearScoreboard.style.backgroundColor = 'orange'
clearScoreboard.textContent = 'Clear Scoreboard'
buttons.append(clearScoreboard);
let heads = document.getElementById('heads')
const headsPercentDisplay = document.getElementById('heads-percent')
let tailsPercentDisplay = document.getElementById('tails-percent')
let tails = document.getElementById('tails')
let headsValue = 0
let tailsValue = 0
let totalFlips = 0
let headsPercent = 0
let tailsPercent = 0

flipPenny.addEventListener('click', () => {
    let randomValue = Math.random();
    if(Math.round(randomValue) === 1){
        coinImage.src = "./assets/images/penny-heads.jpg"
        headsValue ++
        heads.innerText = headsValue;
    } else {
        coinImage.src = "./assets/images/penny-tails.jpg"
        tailsValue ++
        tails.innerText = tailsValue;
    }
    totalFlips ++
    headsPercent = (headsValue/totalFlips)*100;
    headsPercentDisplay.innerText = Math.round(headsPercent) + "%";
    tailsPercent = (tailsValue/totalFlips)*100;
    tailsPercentDisplay.innerText = Math.round(tailsPercent) + "%";

})

clearScoreboard.addEventListener('click', () => {
    headsValue = 0;
    tailsValue = 0;
    totalFlips = 0;
    headsPercent = 0;
    tailsPercent = 0;
    heads.innerText = 0;
    tails.innerText = 0;
    headsPercentDisplay.innerText = '0%';
    tailsPercentDisplay.innerText = '0%';
})
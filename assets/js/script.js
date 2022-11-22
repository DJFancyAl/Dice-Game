// TODO: Declare any global variables we need
const content = document.getElementById('buttons');
const diceImage = document.getElementById('dice-image');
buttons.style.border = '1px solid black';
buttons.style.padding = '15px';
const rollDice = document.createElement("button");
rollDice.style.border = '1px solid black'
rollDice.style.backgroundColor = 'lightblue'
rollDice.textContent = 'Roll the Dice!'
buttons.append(rollDice);
const clearScoreboard = document.createElement("button");
clearScoreboard.style.border = '1px solid black'
clearScoreboard.style.backgroundColor = 'orange'
clearScoreboard.textContent = 'Clear Scoreboard'
buttons.append(clearScoreboard);
let one = document.getElementById('one')
let two = document.getElementById('two')
let three = document.getElementById('three')
let four = document.getElementById('four')
let five = document.getElementById('five')
let six = document.getElementById('six')
const onesPercentDisplay = document.getElementById('one-percent')
const twosPercentDisplay = document.getElementById('two-percent')
const threesPercentDisplay = document.getElementById('three-percent')
const foursPercentDisplay = document.getElementById('four-percent')
const fivesPercentDisplay = document.getElementById('five-percent')
const sixesPercentDisplay = document.getElementById('six-percent')
let onesValue = 0
let twosValue = 0
let threesValue = 0
let foursValue = 0
let fivesValue = 0
let sixesValue = 0
let onesPercent = 0
let twosPercent = 0
let threesPercent = 0
let foursPercent = 0
let fivesPercent = 0
let sixesPercent = 0

let totalRolls = 0


rollDice.addEventListener('click', () => {
    let randomValue = Math.random();
    console.log('worked')
    switch(true){
        case (0 <= randomValue*100 && randomValue*100 <16.66):
            diceImage.src = "./assets/images/dice/dice1.png"
            onesValue ++
            one.innerText = onesValue;
            break;
        case  (16.67 <= randomValue*100 && randomValue*100 < 33.33):
            diceImage.src = "./assets/images/dice/dice2.png"
            twosValue ++
            two.innerText = twosValue;
            break;
        case  (33.34 <= randomValue*100 && randomValue*100 < 50):
            diceImage.src = "./assets/images/dice/dice3.png"
            threesValue ++
            three.innerText = threesValue;
            break;
        case  (50.01 <= randomValue*100 && randomValue*100 < 66.66):
            diceImage.src = "./assets/images/dice/dice4.png"
            foursValue ++
            four.innerText = foursValue;
            break;
        case  (66.67 <= randomValue*100 && randomValue*100 < 83.33):
            diceImage.src = "./assets/images/dice/dice5.png"
            fivesValue ++
            five.innerText = fivesValue;
            break;
        case  (83.34 <= randomValue*100 && randomValue*100 < 100):
            diceImage.src = "./assets/images/dice/dice6.png"
            sixesValue ++
            six.innerText = sixesValue;
            break;
    }
    totalRolls ++
    onesPercent = (onesValue/totalRolls)*100;
    onesPercentDisplay.innerText = Math.round(onesPercent) + "%";
    twosPercent = (twosValue/totalRolls)*100;
    twosPercentDisplay.innerText = Math.round(twosPercent) + "%";
    threesPercent = (threesValue/totalRolls)*100;
    threesPercentDisplay.innerText = Math.round(threesPercent) + "%";
    foursPercent = (foursValue/totalRolls)*100;
    foursPercentDisplay.innerText = Math.round(foursPercent) + "%";
    fivesPercent = (fivesValue/totalRolls)*100;
    fivesPercentDisplay.innerText = Math.round(fivesPercent) + "%";
    sixesPercent = (sixesValue/totalRolls)*100;
    sixesPercentDisplay.innerText = Math.round(sixesPercent) + "%";

})

clearScoreboard.addEventListener('click', () => {
    onesValue = 0
    twosValue = 0
    threesValue = 0
    foursValue = 0
    fivesValue = 0
    sixesValue = 0
    onesPercent = 0
    twosPercent = 0
    threesPercent = 0
    foursPercent = 0
    fivesPercent = 0
    sixesPercent = 0
    totalRolls = 0
    one.innerText = '0';
    two.innerText = '0';
    three.innerText = '0';
    four.innerText = '0';
    five.innerText = '0';
    six.innerText = '0';
    onesPercentDisplay.innerText = '0%';
    twosPercentDisplay.innerText = '0%';
    threesPercentDisplay.innerText = '0%';
    foursPercentDisplay.innerText = '0%';
    fivesPercentDisplay.innerText = '0%';
    sixesPercentDisplay.innerText = '0%';
})
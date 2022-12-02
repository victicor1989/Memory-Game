let cards = 0;
let card1 = null;
let card2 = null;
let firstResult = null;
let secondResult = null

let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numbers = numbers.sort(()=>{return Math.random()-0.5});
console.log(numbers);

function destapar(id) {
    cards++;
    console.log(cards);

    if (cards == 1) {
       card1 = document.getElementById(id);
       firstResult = numbers[id]
       card1.innerHTML = firstResult;
       card1.disabled = true;
    } else if (cards == 2) {
        card2 = document.getElementById(id)
        secondResult = numbers[id]
        card2.innerHTML = secondResult;
        card2.disabled = true;
    }
}
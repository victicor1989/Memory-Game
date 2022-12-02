let cards = 0;
let card1 = null;
let card2 = null;
let firstResult = null;
let secondResult = null;
let movements = 0;
let hits = 0;
let temporizador = false;
let timer = 40;
let timerInicial = timer;
let countdownTime = null;

let showMovements = document.getElementById('movimientos');
let showHits = document.getElementById('aciertos');
let showTime = document.getElementById('t-restante')
let reloadButton = document.getElementById('reiniciar');
reloadButton.addEventListener('click', reloadGame)


let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numbers = numbers.sort(()=>{return Math.random()-0.5});
console.log(numbers);

function countTimer() {
    countdownTime = setInterval(()=>{
        timer--;
        showTime.innerHTML = `Tiempo: ${timer} segundos`;

        if (timer == 0) {
            clearInterval(countdownTime);
            blockCards()
        }
    },1000);
}

function blockCards() {
    for (let i = 0; i<=15; i++) {
        let cardBlock = document.getElementById(i)
        cardBlock.innerHTML = numbers[i];
        cardBlock.disabled = true;
    }
}

function destapar(id) {
    if (temporizador == false) {
        countTimer();
        temporizador = true;
    }

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
        movements++;
        showMovements.innerHTML = `Movimientos: ${movements}`;

        if (firstResult == secondResult) {
            cards = 0;
            hits++;
            showHits.innerHTML = `Aciertos: ${hits}`;

            if (hits == 8) {
                clearInterval(countdownTime)
                showHits.innerHTML = `Aciertos: ${hits} 😱`
                showTime.innerHTML = `Fantastico! 🥳 Sólo demoraste ${timerInicial - timer} segundos`
                showMovements.innerHTML = `Movimientos: ${movements} 😎`
            }

        } else {
            setTimeout(()=>{
                card1.innerHTML = ' ';
                card2.innerHTML = ' ';
                card1.disabled = false;
                card2.disabled = false;
                cards = 0;
            },800);
        }
    }
}

function reloadGame(reloadButton) {
    location.reload()
}
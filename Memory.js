const bilder=[
    'img/background.png',
    'img/battleship.png',
    'img/building.png',
    'img/car.png',
    'img/card_background.png',
    'img/desrtor.png',
    'img/industry.png',
    'img/lokomotive.png',
    'img/robot.png',
    'img/war.png'
];

let karten = [...bilder, ...bilder];

function mischen(array){
    for (let i = array.length - 1; i>0; i--){
        const j = Math.floor(Math.random() *(i +1));
        [array[i], array[j]] = [array[j], array[i]]
    }
    return array;
}

karten = mischen(karten);

const kartencontainer = document.getElementById('karten-container');

karten.forEach(bild =>{
    const karte = document.createElement('div');
    karte.classList.add('card');
    karte.setAttribute('onclick', 'flipCard(this)');

    karte.innerHTML = `
    <img src="img/card_background.png" alt="Vorderseite" class="front">
    <img src="${bild}" alt="Ruecksteite" class="back">
    `;
    kartencontainer.appendChild(karte);
});

let flippedcards = [];
let matchedpairs = 0;

function flipCard(card) {  
    if (flippedcards.length < 2 && !card.classList.contains('flipped')) {  
        card.classList.add('flipped');  
        flippedcards.push(card);  

        if (flippedcards.length === 2) {  
            setTimeout(checkformatch, 1000); // Überprüfen nach einer kurzen Verzögerung  
        }  
    }}
function checkformatch(){
    const[karte1, karte2] = flippedcards;

    if (karte1.querySelector('.back').src === karte2.querySelector('.back').src){
        matchedpairs++;
        if (matchedpairs === bilder.length){
            setTimeout(() => alert('Alle Paare gefunden!!'), 100);
        }
    }else{
        karte1.classList.remove('flipped');
        karte2.classList.remove('flipped');
    }
    flippedcards = [];
}



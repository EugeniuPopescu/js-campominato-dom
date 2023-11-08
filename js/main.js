// prendo il pulsante PLAY
const play = document.querySelector('#play');

// pulsante per refrshare la pagina
const reset = document.querySelector('#reset');

// faccio apparire la mia griglia al click del play
play.addEventListener('click', function() {
    console.log('Inizio partita'); 

    // funzione crea tabella
    createGrid();

});

// al click del pulsante reset refresho la pagina
reset.addEventListener('click', function() {
    location.reload();
});


/************** functions **************/
function getLevel() {
    // funzione che mi prende il livello a cui voglio giocare
    const livello = parseInt(document.querySelector('#livello').value);
    // mi loggo il livello a cui gioco
    console.log('Difficoltà: ', livello);
    return livello;
}

// faccio una funzione che mi crea la mia griglia 
function createGrid() {
    // CREO LA MIA GRIGLIA E LA SVUOTO
    // mi prendo la mia griglia
    let grid = document.querySelector('#grid');
    // mi assicuro che la griglia sia vuota
    grid.innerHTML = '';
    
    // mi prendo la funzione getLevel() e la ricchiamo
    const livello = getLevel();
    // creo le variabili delle celle totati e celle per riga
    let totCells;
    let cellsForRow;

    // condiziono per difficoltà
    if (livello == 1) {
        totCells = 100; // celle totali
        cellsForRow = Math.sqrt(totCells);  // celle per riga (sqrt di celle totali) 
    } else if (livello == 2) {
        totCells = 81;  // celle totali
        cellsForRow = Math.sqrt(totCells);  // celle per riga (sqrt di celle totali) 
    } else if (livello == 3) {
        totCells = 49;  // celle totali
        cellsForRow = Math.sqrt(totCells);  // celle per riga (sqrt di celle totali) 
    }

    // array with 16 casual number
    const arrayR = [];
    while (arrayR.length < 16) {
        let randomNumber = randomNum(1, totCells);
        
        // la condizione controlla se se il numero generato casualmente non esiste già nell'array
        if (arrayR.indexOf(randomNumber) === -1) {
            // dopo aver fatto il controllo, aggiunge il numero NON doppiato
            arrayR.push(randomNumber);
        }
    }

    console.log('Celle che ti fanno esplodere: ', arrayR);

    // FOR che mi cicla da 1 cella a nCells che ho impostato
    for (let i = 1; i <= totCells; i++) {
        // prendo la funzione crea quadrato
        let cell = createSquare(i);

        // modifico la larghezza e l'altezza nel css
        cell.style.width = `calc(100% / ${cellsForRow})`
        cell.style.height = `calc(100% / ${cellsForRow})`;
        // metto il div nel mio cell nella dabella grid
        grid.appendChild(cell);
        
    }
}


function createSquare(i) {
    // creo il mio div
    const cell = document.createElement('div');

    // aggiungo la mia classe al div
    cell.classList.add('square');

    // aggiungo il numero del quadrato
    cell.innerHTML = i;

    // aggiungo un addEvenListener per ogni cella al click
    // voglio gestire ogni quadrato al click
    cell.addEventListener('click', function () {

        // al console log fa vedere che cella clicko
        console.log('cell N:', i);


        // this (si riferisce all'elemento dell'addEvenetListener)
        //  toggle (aggiunge e toglie la classe da un elemento)
        this.classList.toggle('highlight');
    });

    // return 
    return cell;
}

// function random number 
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
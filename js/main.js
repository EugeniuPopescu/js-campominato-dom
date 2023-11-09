// prendo il pulsante PLAY
const play = document.querySelector('#play');

// pulsante per refrshare la pagina
const reset = document.querySelector('#reset');

// dicchiaro il mio gameover con scope generale
let gameover = false; 

// dicchiaro il mio punteggio e lo metto uguale a 0
let punteggio = 0;

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
    // recupero il livello di difficoltà 
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

    // array with 16 casual number PER LA LISTA DI BOMBE
    const arrayBombs = [];

    // uso il LENGTH dell'array come contatore
    while (arrayBombs.length < 16) {
        const randomNumber = randomNum(1, totCells);
        
        // SE l'array NON contiene il numero allora lo pusho
        if (!arrayBombs.includes(randomNumber)) {
            arrayBombs.push(randomNumber);
        }
    }
    console.log('Bombs cells: ', arrayBombs);

    // FOR che mi cicla da 1 cella a nCells che ho impostato
    for (let i = 1; i <= totCells; i++) {
        
        // prendo la funzione crea quadrato CON GLI ARGOMENTI PASSATI
        let cell = createSquare(i, arrayBombs, gameover);

        // modifico la larghezza e l'altezza nel css
        cell.style.width = `calc(100% / ${cellsForRow})`
        cell.style.height = `calc(100% / ${cellsForRow})`;

        // aggiungo un addEvenListener per ogni cella al click
        // voglio gestire ogni quadrato al click
        cell.addEventListener('click', function () {
            
            // al console log fa vedere che cella clicko
            console.log(`cell N: ${i}`);

            /** 
                gamover = false; -> negando il gameover lo si da per true
                nell'else mettendo il gameover = true; fermo il gioco 
            **/
            if (!gameover) {
                // CONTROLLO L'ARRAY DELLE BOMBE
                if (!arrayBombs.includes(i)) {
                    // this (si riferisce all'elemento dell'addEvenetListener)
                    this.classList.add('highlight');
                    punteggio++;
                    document.querySelector('#message').style.color = 'limegreen';
                    document.querySelector('#message').innerHTML = `SCORE ${punteggio}`
                } else {
                    this.classList.add('bomb');
                    gameover = true;
                    console.log();
                    document.querySelector('#message').style.color = 'red';
                    alert(`BOMBA!  casella N.${i}, HAI PERSO!`);
                }
            }


            
            //  toggle (aggiunge e toglie la classe da un elemento)
            
        });

        // metto il div nel mio cell nella dabella grid
        grid.appendChild(cell);
        
    }
}


function createSquare(indice) {
    // creo il mio div
    const cell = document.createElement('div');

    // aggiungo la mia classe al div
    cell.classList.add('square');

    // aggiungo il numero del quadrato
    cell.innerHTML = indice;

    

    // return 
    return cell;
}

// function random number 
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
const diff1 = document.querySelector('#diff1');
const diff2 = document.querySelector('#diff2');
const diff3 = document.querySelector('#diff3');

const reset = document.querySelector('#reset');

reset.addEventListener('click', function() {
    location.reload();
});


diff1.addEventListener('click', function() {
    // add class active
    diff1.classList.add('active');

    // creo una griglia dinamica, inserendo N elemnti .square nel container
    let nCells = 100;

    // mi prendo la mia griglia
    let grid = document.querySelector('#grid');

    // prendo il pulsante PLAY
    const play = document.querySelector('#play');

    // faccio apparire la mia griglia al click del play
    play.addEventListener('click', function() {
        
        // FOR che mi cicla da 1 cella a nCells che ho impostato
        for (let i = 1; i <= nCells; i++) {

            
            let cell = createSquare(i);
            // metto il div nel mio cell nella dabella grid
            grid.appendChild(cell);
            
        }
    });
});


diff2.addEventListener('click', function() {
    // add class active
    diff2.classList.add('active');

    document.documentElement.style.setProperty('--n-cell-for-row', 9);
    // creo una griglia dinamica, inserendo N elemnti .square nel container
    let nCells = 81;

    // mi prendo la mia griglia
    let grid = document.querySelector('#grid');

    // prendo il pulsante PLAY
    const play = document.querySelector('#play');

    // faccio apparire la mia griglia al click del play
    play.addEventListener('click', function() {
        
        // FOR che mi cicla da 1 cella a nCells che ho impostato
        for (let i = 1; i <= nCells; i++) {

            
            let cell = createSquare(i);
            // metto il div nel mio cell nella dabella grid
            grid.appendChild(cell);
            
        }
    });
});

diff3.addEventListener('click', function() {
    // add class active
    diff3.classList.add('active');

    document.documentElement.style.setProperty('--n-cell-for-row', 7);

    // creo una griglia dinamica, inserendo N elemnti .square nel container
    let nCells = 49;

    // mi prendo la mia griglia
    let grid = document.querySelector('#grid');

    // prendo il pulsante PLAY
    const play = document.querySelector('#play');

    // faccio apparire la mia griglia al click del play
    play.addEventListener('click', function() {
        
        // FOR che mi cicla da 1 cella a nCells che ho impostato
        for (let i = 1; i <= nCells; i++) {

            
            let cell = createSquare(i);
            // metto il div nel mio cell nella dabella grid
            grid.appendChild(cell);
            
        }
    });
});

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
// vado a pescare tutte le variabili che mi serve pescare nell'html

const nomePax = document.querySelector('#nome-pax');
const cognomePax = document.querySelector('#cognome-pax');
const trattaKm = document.querySelector('#tratta-km');
const etaAnni = document.querySelector('#eta-anni');
const btnForm = document.querySelector('#btn-form');



//scrivere il prograsmma event handler

function clickBtnFormHandler () {
    console.log('ma mi senti???');
    
}


// aggiungere event listener a bottone
btnForm.addEventListener('click', 'clickBtnFormHandler');

// NB togli il default con paramentro event!
// COSA FA IL PROGRAMMA?
    // toglie default del form
    // check coerenza e integrita''
        // SE dato non va bene, alert inserisci dato corretto
        // SE tutti i dati ok ---->
            // SCRIVI FUNZIONE PER CALCOLARE IL PREZZO
            // stampa i dati dei campi value con innerHTML
            // dentro la card che HAI PREPARATO, VERO????
            // RIMUOVERE d-none a container ticket






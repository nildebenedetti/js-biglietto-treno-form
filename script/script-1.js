// vado a pescare tutte le variabili che mi serve pescare nell'html

const nomePax = document.querySelector('#nome-pax');
const cognomePax = document.querySelector('#cognome-pax');
const trattaKm = document.querySelector('#tratta-km');
const etaAnni = document.querySelector('#eta-anni');
const btnForm = document.querySelector('.btn-bellissimo');
const inputValueNome = 0;

//scrivere il prograsmma event handler

function clickBtnFormHandler (event) {
    event.preventDefault();
    // inserisco input con valore
    // con il trim, puliamo tutti i valori da spazi extra
    let inputValueNome = nomePax.value.trim();
    
    // let inputValue = inputValue.trim();
    
    if ( inputValueNome === '' || !isNaN(inputValueNome) ) {
        alert('inserisci un Nome valido!');
    }

    if ( inputValueNome.length <= 1) {
        alert('il nome è troppo corto!');
    }

    return ;

    
    
    
}


// aggiungere event listener a bottone
btnForm.addEventListener('click', clickBtnFormHandler);

// NB togli il default con paramentro event!
// COSA FA IL PROGRAMMA?
    // toglie default del form --ok
    // check coerenza e integrita''
        // SE dato non va bene, alert inserisci dato corretto
        // SE tutti i dati ok ---->
            // SCRIVI FUNZIONE PER CALCOLARE IL PREZZO
            // stampa i dati dei campi value con innerHTML
            // dentro la card che HAI PREPARATO, VERO????
            // RIMUOVERE d-none a container ticket






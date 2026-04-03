//*================== MY FIUNCTIONS ==============================*//

// mi scrivo la funzione per calcolare il prezzo
// come parametri mi servono eta'e tratta in km
function myTicketPriceCalculator(age, fare) {
    const prezzoKm = 0.21;
    const prezzoTratta = prezzoKm * fare;
    let sconto = 0;

    if (age < 18) {
        sconto = (prezzoTratta) * 0.2;
    }

    else if (age >= 65) {
        sconto = (prezzoTratta) * 0.4;
    }

    let prezzoBiglietto = prezzoTratta - sconto;
    return prezzoBiglietto;


}

//==================================================================//

// vado a pescare tutte le variabili che mi serve pescare nell'html

const nomePax = document.querySelector('.nome-pax');
const cognomePax = document.querySelector('#cognome-pax');
const trattaKm = document.querySelector('.tratta-km');
const etaAnni = document.querySelector('.eta-anni');
const btnForm = document.querySelector('.btn-bellissimo');
const ticketCard = document.querySelector('.ticket-card');
const ticketNomeInput = document.querySelector('.ticket-nome-input');
const ticketCognomeInput = document.querySelector('.ticket-cognome-input');

//scrivere il prograsmma event handler

function clickBtnFormHandler(event) {
    event.preventDefault();
    // inserisco input con valore
    // con il trim, puliamo tutti i valori da spazi extra
    let inputValueNome = nomePax.value.trim();
    let inputValueCognome = cognomePax.value.trim();
    let inputValueTratta = trattaKm.value.trim();

    // check itegrity e coherence per nome
    if (inputValueNome === '' || !isNaN(inputValueNome)) {
        alert('inserisci un Nome valido!');
    } else {
        ticket
    }

    if (inputValueNome.length <= 1) {
        alert('il nome è troppo corto!');
    }
    // check integrity e coherence cognome
    if (inputValueCognome === '' || !isNaN(inputValueCognome)) {
        alert('inserisci un cognome valido!');
    }

    if (inputValueCognome.length <= 1) {
        alert('il cognome è troppo corto!');
    }
    // check integrity e coherence km
    if (inputValueTratta === '' || isNaN(inputValueTratta)) {
        alert('inserisci un valore numerico!');
    }

    const prezzoTicket = myTicketPriceCalculator(etaAnni, trattaKm);
    
    return 
        ticketCard.classList.remove('d-none');


    

}




// aggiungere event listener a bottone
btnForm.addEventListener('click', clickBtnFormHandler);

// NB togli il default con paramentro event!
// COSA FA IL PROGRAMMA?
// toglie default del form --ok
// check coerenza e integrita'' --ok
// SE dato non va bene, alert inserisci dato corretto --ok
// SE tutti i dati ok ---->
// SCRIVI FUNZIONE PER CALCOLARE IL PREZZO
// stampa i dati dei campi value con innerHTML
// dentro la card che HAI PREPARATO, VERO????
// RIMUOVERE d-none a container ticket






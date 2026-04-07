//*================== MY FIUNCTIONS ==============================*//

// mi scrivo la funzione per calcolare il prezzo
// come parametri mi servono eta'e tratta in km
function myTicketPriceCalculator(age, fare) {
    const prezzoKm = 0.21;
    const prezzoTratta = prezzoKm * Number(fare);
    let sconto = 0;

    if (age === 'minor') {
        sconto = (prezzoTratta) * 0.2;
    }

    else if (age === 'elder') {
        sconto = (prezzoTratta) * 0.4;
    }

    let prezzoBiglietto = prezzoTratta - sconto;
    return (`€ ${prezzoBiglietto.toFixed(2)}`);


}

  //seleziono offerta match eta''
function myOfferSelector (age) {
    let offertaBiglietto = 0;
    
    if (age === 'minor') {
        offertaBiglietto = 'Giovani Spelucchiati';
    } else if (age === 'elder') { 
        offertaBiglietto = 'Codini Bianchini';
    } else {
        offertaBiglietto = 'Pelosino Standard';
    }

    return offertaBiglietto;

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
const ticketPrezzoOutput = document.querySelector('.ticket-prezzo-output');
const ticketOffertaOutput = document.querySelector('.ticket-offerta-output');
const etaSelect = document.querySelector('.eta-anni-sel');
const userSelectEta = etaSelect.value;

//scrivere il prograsmma event handler

function clickBtnFormHandler(event) {
    event.preventDefault();
    // inserisco input con valore
    // con il trim, puliamo tutti i valori da spazi extra
    let inputValueNome = nomePax.value.trim();
    let inputValueCognome = cognomePax.value.trim();
    let inputValueTratta = trattaKm.value.trim();
    // calcolo prezzo
    const prezzoTicket = myTicketPriceCalculator(userSelectEta, trattaKm);
    // calcolo nome offerta per biglietto
    const offertaBiglietto = myOfferSelector(userSelectEta);

    // check itegrity e coherence per nome
    if (inputValueNome === '' || !isNaN(inputValueNome)) {
        alert('inserisci un Nome valido!');
    } 

    if (inputValueNome.length <= 1) {
        alert('il nome è troppo corto!');
    } 
    // inserisci il valore pulito nel campo nome input se ha superato i check
    ticketNomeInput.innerText = inputValueNome;

    // check integrity e coherence cognome
    if (inputValueCognome === '' || !isNaN(inputValueCognome)) {
        alert('inserisci un cognome valido!');
    }

    if (inputValueCognome.length <= 1) {
        alert('il cognome è troppo corto!');
    }
    // inserisci il valore pulito nel campo nome input se ha superato i check
    ticketCognomeInput.innerText = inputValueCognome;
    // check integrity e coherence km
    if (inputValueTratta === '' || isNaN(inputValueTratta)) {
        alert('inserisci un valore numerico!');
    }
    
    //scrivi prezzo ticket nel campo prezzo
    ticketPrezzoOutput.innerText = prezzoTicket;

    // scrivi offertaBiglietto nel campo offerta
    ticketOffertaOutput.innerText = offertaBiglietto;
    
    return ticketCard.classList.remove('d-none');

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






'strict';

// Prompt1: quanti chilometri devi percorrere?
//  prendiamo questo imput e trasformiamolo nella variabile trattaKm
// e converti in float (ci servono tassativamente le virgole) 

// accetto di proposito anche valori con la virgola, non si sa mai che becchiamo qualche precisino

const trattaKm = parseFloat(prompt('quanti chilometri devi percorrere (inserire solo valore numerico)?', '10'));

// Prompt2: quanti anni hai?
//  prendiamo questo inpunt e trasformiamolo nella variabile etaAnni
// e converti in Integer (calcoliamo sui compleanni festeggiati) 

const etaAnni = parseInt(prompt('quanti anni hai(inserire solo valore numerico', '18'));

// eta deve essere un numero intero  e < 0 

/* if (isNaN(etaAnni)) {
    console.error("non hai inserito un numero")
}

else { QUA CI METTIAMO DI TUTTO, COMPRESO UN ELSE IF PER LA SECONDA CONDIZIONE etaAnni >= 0

} */


// dichiariamo e assegnamo una variabile per il prezzo di viaggio al km

const prezzoKm = 0.21;

// creiamo ora una variabile per il prezzo al variare della tratta

const prezzoTratta = prezzoKm * trattaKm;

// sconto: da applicare SE si rientra nella fascia eta'

let sconto = 0;

if (etaAnni < 18) {
    sconto = (prezzoTratta) * 0.2;
}

else if (etaAnni >= 65) {
    sconto = (prezzoTratta) * 0.4;
}



// prezzo finale = prezzoTratta - sconto

const prezzoBiglietto = prezzoTratta - sconto;

// stampa in cionsole un valore sensato:

console.log(`Il prezzo da saldare è di €${prezzoBiglietto.toFixed(2)}`);


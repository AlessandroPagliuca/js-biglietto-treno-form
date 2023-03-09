/*
Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo due caselle di input e almeno un bottone per inviare i dati in pagina, in cui l’utente potrà inserire i dati e poi visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.


let numberKm
let passengerAge
let priceTicket (0.21€)
const discountUnderage  (*0.2)
const discountOverSixtyFive (*0.4)
let priceFinal in output
*/

//const discountUnderage
const discountUnderage = 18;

//const discountOverSixtyFive
const discountOverSixtyFive = 65;

//let messageDiscount
let messageDiscount;

//Apply discount for Underage and  OverSixtyFive

let numberKm = ticket.querySelector('input[name="km"]');
let passengerAge = ticket.querySelector('input[name="age"]');
let btnCalc = document.getElementById('btnCalc');

btnCalc.addEventListener('click', function(){
    let km = numberKm.value;
    let age = passengerAge.value;
    let priceTicket = 0;
    let discount = 0;

    if(!isNaN(km) && !isNaN(age)){
        priceTicket = km * 0.21;
        if(age < discountUnderage){
            discount = priceTicket * 0.2;
            discount = discount.toFixed(2);
            priceTicket -= discount;  

            messageDiscount = `The discount (${discount}) has been applied to your ticket,` + ' thank you for choosing us:' + ' ' + priceTicket.toFixed(2) + '€';
        } else if(age >= discountOverSixtyFive){
            discount = priceTicket * 0.4;
            discount = discount.toFixed(2);
            priceTicket -= discount;  

            messageDiscount = `The discount (${discount}) has been applied to your ticket,` + ' thank you for choosing us:' + ' ' + priceTicket.toFixed(2) + '€';
        } else{
            messageDiscount = 'No discount has been applied to your ticket,' + ' ' + priceTicket.toFixed(2) + '€';
        }
    
    } else{
        messageDiscount = "Invalid data entered, please try again";
    }

console.log(numberKm.value, passengerAge.value);
//print the priceFinal in human format with two decimals
console.log(messageDiscount);

document.getElementById("buyTicket").innerHTML = messageDiscount;

}); 

btnReset.addEventListener('click', function(){
    numberKm.value = '';
    passengerAge.value = '';
    document.getElementById("buyTicket").innerHTML = '';

});

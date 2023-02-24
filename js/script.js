// CONSEGNA:
// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// PSEUDO CODE:

/*
- Creo un container nel DOM e lo seleziono;
- FOR per 100 iterazioni stampo il contatore;
    ? SE: contatore è divisibile per 3 e (&&) per 5 (resto divisione è 0)
        V1: Scrivo contatore + 'FizzBuzz';
    :? ALTRIMENTI SE: contatore è divisibile per 3: 
        V1: Scrivo contatore + 'Fizz';
    :? ALTRIMENTI SE: contatore è divisibile per 5: 
        V1: Scrivo contatore + 'Buzz';
    : ALTRIMENTI: 
        F1: Scrivo il contatore;

    - Per ogni iterazione creo un nuovo elemento <div>;
    - Assegno ogni elemento <div> al padre (container) (.append());
    - Scrivo dentro ogni <div> elemento il valore del contatore secondo le logiche del gioco;
*/

// - Creo un container nel DOM e lo seleziono;
let containerEl = document.getElementById('container');


// - FOR per 100 iterazioni stampo il contatore;
for(let i=0; i<100; i++){

    // - Per ogni iterazione creo un nuovo elemento <div>;
    let newDivEl = document.createElement('div');

    // - Assegno ogni elemento <div> al padre (container) (.append());
    containerEl.append(newDivEl);

    // ? SE: contatore è divisibile per 3 e (&&) per 5:
    // :? ALTRIMENTI SE: contatore è divisibile per 3: 
    // :? ALTRIMENTI SE: contatore è divisibile per 5:
    // : ALTRIMENTI:
    if((i+1)%3==0 && (i+1)%5==0){
        // V1: Scrivo contatore + 'FizzBuzz';
        console.log(i+1 + ' - FizzBuzz');

        // - Scrivo dentro ogni <div> elemento il valore del contatore secondo le logiche del gioco;
        newDivEl.innerHTML = 'FizzBuzz';

        // Attribuisco un colore diverso
        newDivEl.classList.add('fizzbuzz');
    } else if ((i+1)%3==0){
        // V1: Scrivo contatore + 'Fizz';
        console.log(i+1 + ' - Fizz');

        // - Scrivo dentro ogni <div> elemento il valore del contatore secondo le logiche del gioco;
        newDivEl.innerHTML = 'Fizz';

        // Attribuisco un colore diverso
        newDivEl.classList.add('fizz');
    } else if ((i+1)%5==0){
        // V1: Scrivo contatore + 'Buzz';
        console.log(i+1 + ' - Buzz');

        // - Scrivo dentro ogni <div> elemento il valore del contatore secondo le logiche del gioco;
        newDivEl.innerHTML = 'Buzz';

        // Attribuisco un colore diverso
        newDivEl.classList.add('buzz');
    } else {
        // F1: Scrivo il contatore;
        console.log(i+1);
        // - Scrivo dentro ogni <div> elemento il valore del contatore secondo le logiche del gioco;
        newDivEl.innerHTML = (i+1);

        // Attribuisco un colore diverso
        newDivEl.classList.add('number');
    }
}


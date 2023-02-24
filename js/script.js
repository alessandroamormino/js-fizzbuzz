// CONSEGNA:
// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// PSEUDO CODE:

/*
- FOR per 100 iterazioni stampo il contatore;
    ? SE: contatore è divisibile per 3 e (&&) per 5 (resto divisione è 0)
        V1: Scrivo contatore + 'FizzBuzz';
    :? ALTRIMENTI SE: contatore è divisibile per 3: 
        V1: Scrivo contatore + 'Fizz';
    :? ALTRIMENTI SE: contatore è divisibile per 5: 
        V1: Scrivo contatore + 'Buzz';
    : ALTRIMENTI: 
        F1: Scrivo il contatore;
*/


// - FOR per 100 iterazioni stampo il contatore;
for(let i=0; i<100; i++){
    // ? SE: contatore è divisibile per 3 e (&&) per 5:
    // :? ALTRIMENTI SE: contatore è divisibile per 3: 
    // :? ALTRIMENTI SE: contatore è divisibile per 5:
    // : ALTRIMENTI:
    if((i+1)%3==0 && (i+1)%5==0){
        // V1: Scrivo contatore + 'FizzBuzz';
        console.log(i+1 + ' - FizzBuzz');
    } else if ((i+1)%3==0){
        // V1: Scrivo contatore + 'Fizz';
        console.log(i+1 + ' - Fizz');
    } else if ((i+1)%5==0){
        // V1: Scrivo contatore + 'Buzz';
        console.log(i+1 + ' - Buzz');
    } else {
        // F1: Scrivo il contatore;
        console.log(i+1);
    }
}
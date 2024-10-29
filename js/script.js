let flag = false;

do {

    //Inserimento valore dall'utente
    const counterFizzBuzz = parseInt(prompt("Inserisci il numero fino a dove vuoi avere FizzBuzz"))

    //Controllo inserimento valore
    if (isNaN(counterFizzBuzz) || counterFizzBuzz == null) {
        console.log("Il valore inserito non è corretto perfavore inserite un numero");
    } else {

        for (let i = 1; i <= counterFizzBuzz; i++) {

            if (i % 5 == 0 && i % 3 == 0) {
                console.log(i + ' FizzBuzz');

            } else if (i % 5 == 0) {
                console.log(i + ' Buzz');

            } else if (i % 3 == 0) {
                console.log(i + ' Fizz');

            } else {
                console.log(i);
            }
        }
    }

    //variabile per far scegliere se l'utente vuole continuare
    let loop = prompt("Inserisci Y per continuare oppure N per smettere")

    if (loop == "Y" || loop == "y") {
        flag = true;

    } else {
        flag = false
    }

} while (flag);



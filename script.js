function fuzzbuzz() {
    let number = Number(prompt("Enter any number"));
    for ( let i = 1; i <= number ; i++) {
         if ( i %3 == 0 && i % 5 == 0) {
            console.log("FuzzBuzz");
         } else if (i %3 == 0 ) {
            console.log("Fuzz");
        } else if ( i % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fuzzbuzz();
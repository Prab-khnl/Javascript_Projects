# Javascript_Projects

-We let the user enter any number
-We input that number and print "Fuzz" if remainder of that number when divided by 3 is zero and "Buzz" when       divided bt 5 is zero.
-We will print "FuzzBuzz" if it gives zero remainder when divided by both 3 and 5.
- We will print all the number between 1 to number.


  function fuzzbuzz() {
    let number = Number(prompt("Enter any number"));
    for ( let i = 1; i <= number ; i++) {
        if (i %3 == 0 ) {
            console.log("Fuzz");
        } else if ( i % 5 == 0) {
            console.log("Buzz");
        } else if ( i %3 == 0 && i%5 == 0) {
            console.log("FuzzBuzz");
        }else {
            console.log(i);
        }
    }
}

fuzzbuzz();
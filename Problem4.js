

let n = 1000;
let arrStore = [];

function generateTriangularNumber(n) {
    return (n * (n + 1)) / 2;
}



for (let i = 0; i < n; i++) {
    const noGeneratedByFunc = generateTriangularNumber(i);
    arrStore.push(noGeneratedByFunc);
}

arrStore.forEach((value) => {
    let divisor = 0;
    
    for (let i = 1; i <= value; i++) {
        if (value % i === 0) {
            divisor++;
        }
    }

    if (divisor > 100) {
        // alert("found")
        console.log("Divisors exceed 500 for triangular number:", ("Divisors for triangular number:", value, "Total divisors:", divisor))
    }


//  document.write("Divisors for triangular number:", value, "Total divisors:", divisor);
console.log("Divisors for triangular number:", value, "Total divisors:", divisor);
  
});



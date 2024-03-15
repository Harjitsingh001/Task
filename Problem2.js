

function checkPalindrome(product) {
    const string = product.toString();


    const splitted = string.split("");
    const reversed = splitted.reverse();

   
    const joined = reversed.join("");

    return string === joined;
}



function largePalindromeProd()
 {

    let largestPalindrome = 0;

    for (let i = 100; i < 1000; i++) {
        for (let j = 100; j < 1000; j++) {
            const product = i * j;

            if (checkPalindrome(product) && product > largestPalindrome) {
                largestPalindrome = product;

                // console.log(largestPalindrome);

            }
        }
    }

    console.log("largest palindrome product", largestPalindrome);
    
document.write("Largest Palindrome in range : ",largestPalindrome)

}


largePalindromeProd();

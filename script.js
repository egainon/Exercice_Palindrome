// Ecrivez une fonction qui prend en paramètre un mot 
// et vérifie si c'est un palindrome.
function palindrome(mot){
//    let splits = mot.split("");
//    let reversed = splits.reverse();
//    let joined = reversed.join(""); on peut cumuler sur une ligne
   let motFinal = mot.split("").reverse().join("");
    if (mot === motFinal){
        console.log("C'est un palindrome, félicitation!");
    }else{
        console.log("Ce n'est pas un palindrome, sorry !")
    }
}
palindrome("trick or treat");
palindrome("xanax");

//on peut tout mettre dans la condition
function isPalindrome(mot){
    if (mot === mot.split("").reverse().join("")){
        console.log("Palindrome")
    } else {
        console.log("Pas palindrome")
    }
} 
isPalindrome("xanax")
isPalindrome("salem")


function palindromeTest(mot2){
    if (mot2 === mot2.split("").reverse().join("")){
        console.log("True");
    }else{
        console.log("False");
    }
}
palindromeTest("xanax");

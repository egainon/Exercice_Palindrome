//Recherchez la méthode .split() sur MDN et/ou Google.
// (chatGPT et IA interdit, c'est pour vous apprendre à chercher et lire de la doc !)
// Déclarez une variable contenant un mot et
// utilisez la méthode split dessus.
// N'oubliez pas le console.log !
// mot = "salem";
// let splits = mot.split("");
// console.log(splits);

// Faites des recherches dans les mêmes conditions pour la 
// méthode .reverse()
// Déclarez à nouveau une variable contenant un mot,
// utilisez la méthode split puis la méthode reverse dessus.
// N'oubliez pas de console.log, ce sera encore plus 
// // parlant de console.log avant ET après la méthode reverse !
// mot = "trick or treat";
// splits = mot.split("");
// console.log(splits);

// let reversed = splits.reverse();
// console.log(reversed);

// let joined = reversed.join("");
// console.log(joined);


//Maintenant que vous maîtrisez les 3 méthodes .split(), 
// .reverse(), .join(),
// écrivez une fonction qui prend en paramètre un mot 
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
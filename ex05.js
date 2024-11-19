// ex05.js

function countVowels(str) {
    let out = 0;
	for(let letter of str) {
        if(/(a|e|i|o|u|y)/.test(letter.toLowerCase())) out++;
    }
    return out;
}

// Exemples de test :
console.log(countVowels("hello")); // Résultat attendu : 2
console.log(countVowels("xyz")); // Résultat attendu : 1
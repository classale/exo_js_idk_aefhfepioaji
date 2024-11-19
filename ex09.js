// ex09.js

function sumEvenNumbers(arr) {
	let out = 0;
    for(let n of arr) if(n % 2 == 0) out += n;
    return out;
}

// Exemples de test :
console.log(sumEvenNumbers([1, 2, 3, 4])); // Résultat attendu : 6
console.log(sumEvenNumbers([7, 11, 18])); // Résultat attendu : 18
// ex00.js

function sumArray(arr) {
	let out = 0;
    for(let n of arr) {
        out += n;
    }
    return out;
}

// Exemples de test :
console.log(sumArray([1, 2, 3, 4])); // Résultat attendu : 10
console.log(sumArray([10, -2, 5])); // Résultat attendu : 13
// ex04.js

function filterPositiveNumbers(arr) {
	let out = [];
    for(let n of arr) {
        if(n > 0) out.push(n);
    }
    return out;
}

// Exemples de test :
console.log(filterPositiveNumbers([-3, 5, -1, 2])); // Résultat attendu : [5, 2]
console.log(filterPositiveNumbers([-1, -2, -3])); // Résultat attendu : []
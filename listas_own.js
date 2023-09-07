let lista1 = [1, 2, 6, 23, 64, 12, 34, 64];
let lista2 = [25, 28, 64,94, 56 ,469,8,1,2];

let listConcat = lista1.concat(lista2);

const elementosRepetidos = new Set();
const elementosNoRepetidos = new Set();

for (let i = 0; i < listConcat.length; i++) {
    for (let f = 0; f < listConcat.length; f++) {
        if (listConcat[i] == listConcat[f] && i != f) {
            const elemento = listConcat[i];
            elementosRepetidos.add(elemento);
        }
    }
    
}

console.log(elementosRepetidos);
function ordenarArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] < array[j]) {
                let ordenando = array[i];
                array[i] = array[j];
                array[j] = ordenando;
            }
        }
    }
    return array;
}

let array = [5, 3, 2, 4, 7, 1, 0, 6];
console.log(ordenarArray(array));


//Algoritmo de ordenação Buble Sort, ele é um algoritmo de complexidade O(n^2);


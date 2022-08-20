// 1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente.

const people = [{
        name: 'Mateus',
        age: 18
    },
    {
        name: 'José',
        age: 16
    },
    {
        name: 'Ana',
        age: 23
    },
    {
        name: 'Cláudia',
        age: 20
    },
    {
        name: 'Bruna',
        age: 19
    },
];

// points.sort((a, b) => b - a);

people.sort((a, b) => a.age - b.age)

console.log(people);


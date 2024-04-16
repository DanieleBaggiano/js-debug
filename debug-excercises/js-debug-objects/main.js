/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
const cars = [
    {
        manufacturer: 'Ford',
        model: 'Fiesta',
        type: 'Diesel'
    },
    {
        manufacturer: 'Audi',
        model: 'A1',
        type: 'Benzina'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Golf',
        type: 'Benzina'
    },
    {
        manufacturer: 'Fiat',
        model: 'Panda',
        type: 'Metano'
    },
    {
        manufacturer: 'Fiat',
        model: 'Multipla',
        type: 'GPL'
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        type: 'Elettrico'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        type: 'Benzina'
    },
    {
        manufacturer: 'Ford',
        model: 'Kuga',
        type: 'Diesel'
    },
    {
        manufacturer: 'Seat',
        model: 'Ibiza',
        type: 'Metano'
    },
    {
        manufacturer: 'Audi',
        model: 'R8',
        type: 'Benzina'
    },
];

const gasolineCars = cars.filter( (auto) => {
    return auto.type === 'Benzina';
});

const dieselCars = cars.filter( (auto) => {
    return auto.type === 'Diesel';
});

const otherCars = cars.filter( (auto) => {
    return auto.type !== 'Benzina' && auto.type !== 'Diesel';
});

console.log('Auto a benzina');
console.log(gasolineCars);
console.log('*******************************');

console.log('Auto a diesel');
console.log(dieselCars);
console.log('*******************************');

console.log('Tutte le altre auto');
console.log(otherCars);

// In questo esercizio è presente un array di 10 macchine con varie caratteristiche, tramite filter vengono suddivise in tre array in base alla loro alimentazione (1-benzina, 2-diesel e 3-altro) e poi stampate in console.
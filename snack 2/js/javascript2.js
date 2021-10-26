
// creo un array di squadre con le proprietà

const squadre =[
    {
        nome : "Liverpool", 

        punti : 0,

        falli : 0,

    },
    {
        nome : "Chelsea", 

        punti : 0,

        falli : 0,

    },
    {
        nome : "Man united", 

        punti : 0,

        falli : 0,

    },
    {
        nome : "Man City", 

        punti : 0,

        falli : 0,

    },
    {
        nome : "Arsenal", 

        punti : 0,

        falli : 0,

    },
]

console.log(squadre)
    

// creo due variabili per mettere il Math.Random

let puntiRandom

let falliRandom

// creo un ciclo for in cui sostituisco i falli e i punti con un valore random

for ( let i = 0; i < squadre.length; i++ ){

    let puntiRandom = Math.floor(Math.random() * 70);

    let falliRandom =  Math.floor(Math.random() * 50);

    if (squadre[i].punti === 0) {

        squadre[i].punti = puntiRandom
    }

    if (squadre[i].falli === 0) {

        squadre[i].falli = falliRandom
    }
}

console.log(squadre)


const squadreFinali = []


for (let i = 0; i < squadre.length; i++) {
    let  element = array[i];
        
}

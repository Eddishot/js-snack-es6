

// creo un array  di bici con proprietà di peso e nome


const biciArray=[
    {

        nome : "bici1",

        peso : 10
    },

    {
        nome : "bici2",

        peso : 15
    },

    {
        nome : "bici3",

        peso : 20
    },

    {
        nome : "bici4",

        peso : 5
    },

    {
        nome : "bici5",

        peso : 17
    },

]
console.log(biciArray);


// creo la funzione


function lightbici(array){

    // creo l´array dove mettere i pesi delle bici

    const pesoBici =[]

    // creo un ciclo for per estarre i pesi delle bici

    for (let i = 0; i < array.length; i++) {
        
        const {peso} = array [i];


        // pusho il peso delle bici nell´array peso bici 
        pesoBici.push(peso)
        
    }
    // creo una costante per cercare il peso minore
    
    const pesoLight = Math.min (... pesoBici)
    
    console.log(pesoLight);



    for (let i = 0; i < array.length; i++){

        if(pesoBici[i].peso === pesoLight){

            alert(`Complimenti il peso della tua bici è ${array[i].nome} e pesa ${pesoLight}`)
        }
    } 

}

// invoco la funzione

lightbici(biciArray)


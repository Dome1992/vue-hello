// Creiamo una variabile con la funzione CREATEAPP, ed aggiungiamo VUE
const { createApp } = Vue;

createApp ({  //Invochiamo la funzione CREATEAPP
    data() {
        return {
            messaggio: 'Hello Vue!'
        }
    }
}).mount('#app') // Invochiamo il metodo .mount() per collegare il tag #APP da Html a VUE
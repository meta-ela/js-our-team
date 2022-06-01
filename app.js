/*
Per la pagina ‘Chi siamo’ del nostro sito aziendale, 
dobbiamo sviluppare la sezione “Il nostro team”.

Definiamo un array di oggetti che rappresentano i membri del team.
Ogni membro ha le informazioni necessarie per stampare 
la relativa card: Nome, Ruolo e Foto.

Milestone 1:
stampare in console l’elenco dei membri del team, 
scrivendo separatamente i dettagli di ciascun componente.

Milestone 2:
stampare i dati all’interno di un contenitore nella pagina 
html in modo dinamico, creando per ciascun membro del team un 
elemento html che conterrà i suoi dati.


BONUS:
stilizziamo la sezione realizzando le card di ciascun 
membro del team, come nel mockup allegato.

*/

// creare array di objects 
const membersList = [
    {
        photo: "",
        name: "Wayne Branett",
        role: "Founder & CEO",
    },
    {
        photo: "",
        name: "Angela Caroll",
        role: "Chief Editor",
    },
    {
        photo: "",
        name: "Walter Gordon",
        role: "Office Manager",
    },
    {
        photo: "",
        name: "Angela Lopez",
        role: "Social Media Manager",
    },
    {
        photo: "",
        name: "Scott Estrada",
        role: "Developer",
    },
    {
        photo: "",
        name: "Barbara Ramos",
        role: "Graphic Designer",
    },
];

console.table(membersList);
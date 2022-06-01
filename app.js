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
        photo: "wayne-barnett-founder-ceo.jpg",
        name: "Wayne Branett",
        role: "Founder & CEO",
    },
    {
        photo: "angela-caroll-chief-editor.jpg",
        name: "Angela Caroll",
        role: "Chief Editor",
    },
    {
        photo: "walter-gordon-office-manager.jpg",
        name: "Walter Gordon",
        role: "Office Manager",
    },
    {
        photo: "angela-lopez-social-media-manager.jpg",
        name: "Angela Lopez",
        role: "Social Media Manager",
    },
    {
        photo: "scott-estrada-developer.jpg",
        name: "Scott Estrada",
        role: "Developer",
    },
    {
        photo: "barbara-ramos-graphic-designer.jpg",
        name: "Barbara Ramos",
        role: "Graphic Designer",
    },
];

console.table(membersList);

let allTemplate = "";

let teamContainer = document.querySelector(".team-container");

// stampo in console ogni elemento separatamente con un ciclo
for (let i = 0; i < membersList.length; i++) {
    let member = membersList[i]; 

    /* console.log(
        member.photo, 
        `Complete Name: ${member.name}`,
        `Company Role: ${member.role}`
    );
 */
    console.log(
        `Complete Name: ${member.name} & Company Role: ${member.role}`,
    );
    
    // stampare in html un template
    let templateLiteral = `
    <div class="team-card">
        <div class="card-image">
            <img
            src="img/${member.photo}"
            alt="Wayne Barnett"
            />
        </div>
        <div class="card-text">
            <h3>${member.name}</h3>
            <p>${member.role}</p>
        </div>
    </div>`
    
    /* allTemplate += templateLiteral; */
    
    teamContainer.append(createElementFromHTML(templateLiteral));
}

/* teamContainer.innerHTML = allTemplate; */

/* function createCard(user) {
    const teamContainer = document.querySelector(".team-container");
    let templateLiteral = `
    <div class="team-card">
        <div class="card-image">
            <img
            src="img/wayne-barnett-founder-ceo.jpg"
            alt="Wayne Barnett"
            />
        </div>
        <div class="card-text">
            <h3>${user.name}</h3>
            <p>${user.role}</p>
        </div>
    </div>`
    return templateLiteral

    teamContainer.append(user);
}

createCard(membersList); */





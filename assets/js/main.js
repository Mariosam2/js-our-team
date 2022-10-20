/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto. */

// Milestone 0  Creare l’array di oggetti con le informazioni fornite.
const row = document.querySelector('.row');
const teamArray = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Chief Editor',
        img: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Social Media Manager',
        img: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        img: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg'
    },
    
]
printValues(teamArray);
getValues(teamArray);

// Milestone 1  Stampare su console le informazioni di nome, ruolo e la stringa della foto
function printValues (arrayOfObjects){
    for(let i = 0; i < arrayOfObjects.length; i++){
        let object = arrayOfObjects[i];
        for(let key in object){
            //console.log(`${key}: ${object[key]}`);
        }
    }
}

// Milestone 2  Stampare le stesse informazioni su DOM sottoforma di stringhe
function getValues (arrayOfObjects){
    for(let i = 0; i < arrayOfObjects.length; i++){
        let object = arrayOfObjects[i];
        let imgMarkup = '';
        let roleMarkup = '';
        let nameMarkup = '';
        let markup = '';
        let cardEl = document.createElement('div');
        let contentEl = document.createElement('div');
        cardEl.classList.add('col-4', 'card');
        contentEl.classList.add('content');
        cardEl.append(contentEl);
        row.append(cardEl);
        
        for(let key in object){
            if(key === 'role') {
                roleMarkup = `<span class=${key}>${object[key]}</span>`;
            } else if (key === 'name'){
                nameMarkup = `<span class=${key}>${object[key]}</span>`
            } else {
                imgMarkup = `<img src="./assets/img/${object[key]}">`
            }
        }
        markup = markup.concat(imgMarkup,nameMarkup,roleMarkup);
        //console.log(markup)
        contentEl.insertAdjacentHTML('beforeend', markup);
    }
}
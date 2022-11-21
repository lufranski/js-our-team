// Js - Our Team

// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto

// 1. Creare l'array di oggetti
const teamMembers = [
    // member #1
    {
        'name': 'Wayne Barnett',
        'role': 'Founder & CEO',
        'image': 'wayne-barnett-founder-ceo.jpg'
    },
    // member #2
    {
        'name': 'Angela Caroll',
        'role': 'Chief Editor',
        'image': 'angela-caroll-chief-editor.jpg'
    },
    // member #3
    {
        'name': 'Walter Gordon',
        'role': 'Office Manager',
        'image': 'walter-gordon-office-manager.jpg'
    },
    // member #4
    {
        'name': 'Angela Lopez',
        'role': 'Social Media Manager',
        'image': 'angela-lopez-social-media-manager.jpg'
    },
    // member #5
    {
        'name': 'Scott Estrada',
        'role': 'Developer',
        'image': 'scott-estrada-developer.jpg'
    },
    // member #6
    {
        'name': 'Barbara Ramos',
        'role': 'Graphic Designer',
        'image': 'barbara-ramos-graphic-designer.jpg'
    }
];

console.log(teamMembers);
// 2. Stampare su console le info per ogni membro del team

const wrapper = document.getElementById('container');

for (let i = 0; i < teamMembers.length; i++){
    
    console.log(`Membro #${i}: ${teamMembers[i].name} ${teamMembers[i].role} ${teamMembers[i].image} `);

    // 3. Stampare sul DOM le info per ogni membro del team
    
    wrapper.innerHTML += `<div>${teamMembers[i].name} ${teamMembers[i].role} ${teamMembers[i].image}</div>`;
    
}

















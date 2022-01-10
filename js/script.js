const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

let container=document.querySelector(".team-container");
for(let i=0;i<team.length;i++){
  let card=team[i];
  container.innerHTML +=`<div class="team-card">
    <div class="card-image">
      <img
        src="img/${card.image}"
        alt="${card.name}"
      />
    </div>
    <div class="card-text">
      <h3>${card.name}</h3>
      <p>${card.role}</p>
    </div>
  </div>`
}
// for(i=0;i<team.length;i++){
//   let card=team[i];
//   let teamCard=document.createElement('div');
//   teamCard.classList.add("team-card");
//   container.append(teamCard);
//   let cardImage=document.createElement('div');
//   cardImage.classList.add("card-image");
//   teamCard.append(cardImage);
//   let img=document.createElement("img");
//   img.src=`img/${card.image}`;
//   img.alt=card.name;
//   cardImage.append(img);
//   let cardText=document.createElement("div");
//   cardText.classList.add("card-text");
//   teamCard.append(cardText);
//   let nameCard=document.createElement("h3");
//   nameCard.innerText=card.name;
//   cardText.append(nameCard);
//   let roleCard=document.createElement("p");
//   roleCard.innerText=card.role;
//   cardText.append(roleCard);
// }
let addCard=document.getElementById("addMemberButton");
addCard.addEventListener('click',function(){
      let newName=document.getElementById("name").value;
      let newRole=document.getElementById("role").value;
      let newImg=document.getElementById("image").value;
      let newObject={
        name: newName,
        role: newRole,
        image: newImg
      }
      team.push(newObject);
})
// program to append an object to an array

// function insertObject(arr, obj) {

//   // append object
//   arr.push(obj);
  
//   console.log(arr);
// }

// // original array
// let array = [1, 2, 3];

// // object to add
// let object = {x: 12, y: 8};

// // call the function
// console.log(insertObject(array, object));
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
  const createCard=(prop1,prop2,prop3)=>{
      container.innerHTML +=`<div class="team-card">
        <div class="card-image">
          <img
            src="img/${prop1}"
            alt="${prop2}"
          />
        </div>
        <div class="card-text">
          <h3>${prop2}</h3>
          <p>${prop3}</p>
        </div>
      </div>`
  }
  let addCard=document.getElementById("addMemberButton");
  addCard.addEventListener('click',function(){
      let newName=document.getElementById("name").value;
      let newRole=document.getElementById("role").value;
      let newImg=['new-team-member-02.jpg','new-team-member-01.jpg','new-team-member-03.jpg','new-team-member-04.jpg']
      let newObject={
        name: newName,
        role: newRole,
        image: newImg
      }
      team.push(newObject);
      createCard(newImg[document.getElementById("image").value],newName,newRole)
    
})

let container=document.querySelector(".team-container");
for(i=0;i<team.length;i++){
  let card=team[i];
  createCard(card.image,card.name,card.role);
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

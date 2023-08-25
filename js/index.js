const today = new Date('2023-08-21');
let thisYear = today.getFullYear();
const footer = document.querySelector("footer");
 
const copyright = document.createElement("p");
copyright.innerHTML = "Stephanie Alvarado" + " " + thisYear;
footer.appendChild(copyright);


let skills = ["Microsoft Office", "Javascript", "html", "CSS", "Lightroom"];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector("ul");


for (let i = 0; i < skills.length; i++) {
   let skill = document.createElement('li');
   skill.innerText = (skills[i]);
   skillsList.appendChild(skill);
   console.log(skills);
  } 
  //for loop skills section 

  
  let messageForm = document.getElementsByName("leave_message");

  document.addEventListener("Submit", myFunction);
  
  function myFunction(event) {

    event.preventDefault();
    let usersName = event.target.usersName;
    let usersEmail = event.target.usersEmail;
    let usersMessage = event.target.usersMessage;
   

    console.log(event);
    let messageSection = document.getElementById('#messages');
    let messageList = messageSection.querySelector(".<ul>");
    let newMessage = document.createElement('li');
    newMessage.innerHTML = '<a>' + usersEmail + '<span>' + usersMessage;
    let removeButton = document.createElement('<button>');
    removeButton.innerText = "Remove";
    removeButton.setAttribute('type', 'button');
    removeButton.addEventListener("click", function2);

    function function2(){
      let entry = removeButton.parentNode;
      entry.removeChild();
      removeButton.appendChild(newMessage);
      newMessage.appendChild(messageList);
    }
    document.getElementById("submit").reset();
  }









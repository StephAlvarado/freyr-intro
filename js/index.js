//footer/copyright
const today = new Date('2023-08-21');
let thisYear = today.getFullYear();
const footer = document.querySelector("footer");

const copyright = document.createElement("p");
copyright.innerHTML = "Stephanie Alvarado" + ' ' + thisYear;
footer.appendChild(copyright);


// Skills Section 
let skills = ['Microsoft Office', 'Javascript', 'HTML', 'CSS', 'Lightroom'];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement('li');
  skill.innerText = (skills[i]);
  skillsList.appendChild(skill);
  console.log(skills);
  } 


// Fetch Data 6.2/ projects section
fetch('https://api.github.com/users/StephAlvarado/repos')
 .then(response => {
   if(response.ok){
      return response.json();
    } else{
      throw new Error('Failed data Fetch from GitHub Api');
    }
  })

 .then(repositories => {
  console.log(repositories);


 const projectSection = document.getElementById('projects');
 const projectlist = projectSection.querySelector("ul");
  

  for (let i = 0; i < repositories.length; i++) {
    let GitRepository = repositories[i];
    let LinkProject = document.createElement('a');
    LinkProject.href = GitRepository.html_url;
    LinkProject.textContent = GitRepository.name;

    let project = document.createElement('li');
    project.appendChild(LinkProject);
    projectlist.appendChild(project);
   }
  })
 

   .catch(error => {
    console.error("Error fetching data:", error);
});

// leave a message - section does not 
const messageForm = document.getElementsByName("leave_message");
 messageForm.addEventListener("submit", (event) =>{
    
    event.preventDefault();

    let usersName = event.target.usersName.value;
    let usersEmail = event.target.usersEmail.value;
    let usersMessage = event.target.usersMessage.value; 

    console.log(usersName1);
    console.log(usersEmail1);
    console.log(usersMessage1);

    let messageSection = document.getElementById('messages');
    let messageList = messageSection.querySelector('ul');
    let newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href=mailto: ${usersEmail}>${usersName}</a>
    <span>${usersMessage}</span>`




let removeButton = document.createElement('button');
  removeButton.innerText = "Remove";
  removeButton.type= "button";


///when I run this code it erases my projects and skills section


//removeButton.addEventListener('click',(event) => {

   //let entry = removeButton.parentNode;
     // entry.remove();

  //newMessage.appendChild(removeButton);
 // messageList.appendChild(newMessage);


    messageForm.reset();
 })


 

   


//
   //


   


   //
   //


   

   //let ListSize = document.querySelector('#messages ul').childElementCount;
   //if (ListSize === 0){
    //messageHeader.style.display = "none";
    //} else {
     //messageHeader.style.display = "";
    //}

  //});

  //

//});  


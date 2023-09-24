//footer-copyright
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
})


// Leave a Message
let messageForm = document.querySelector('[name="leave_message"]');
messageForm.addEventListener('submit', createMessage);


function createMessage(event) {
  event.preventDefault();


  //  using target value allows to see what user is typing
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;
  console.log(usersEmail);
  console.log(usersName);
  console.log(usersMessage);


  // for declaring a variable const is better to use in this case
  const messageSection = document.getElementById('messages');
  const messageList = messageSection.querySelector('ul');
  const newMessage = document.createElement('li');


  // how message will look like
  newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a>
     "wrote:" <span>${usersMessage} </span> <br>`;

// button remove
const removeButton = document.createElement('button');
removeButton.innerText = 'Remove';
removeButton.setAttribute('type', 'button');
removeButton.addEventListener('click', btnRemove);


function btnRemove() {
  const entry = removeButton.parentNode;
  entry.remove();
}


newMessage.appendChild(removeButton);
messageList.appendChild(newMessage);
messageForm.reset();
}





const today = new Date('2023-08-21');
let thisYear = today.getFullYear();
const footer = document.querySelector("footer");
 
const copyright = document.createElement("p");
copyright.innerHTML = "Stephanie Alvarado" + ' ' + thisYear;
footer.appendChild(copyright);

// Skills Section 
let skills = ['Microsoft Office', 'Javascript', 'html', 'CSS', 'Lightroom'];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
   let skill = document.createElement('li');
   skill.innerText = (skills[i]);
    skillsList.appendChild(skill);
    console.log(skills);
  } 
  
// Leave a Message
  const messageForm = document.forms.leave_message;

  messageForm.addEventListener("submit", function(event){
    event.preventDefault();


    let usersName = event.target.usersName.value;
    console.log('Name:',usersName);

    let usersEmail = event.target.usersEmail.value;
    console.log('Email:', usersEmail);

    let usersMessage = event.target.usersMessage.value;
    console.log('Message:', usersMessage);


    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>
    <span>${usersMessage}</span>`

    messageList.appendChild(newMessage);
  

    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.type = 'button';


    newMessage.appendChild(removeButton);
    removeButton.addEventListener('click', function(event) {
      
      const entry = removeButton.parentNode;
      entry.remove();
    });

    
messageForm.reset();
  });




// Fetch Data 6.2
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

  //const repositories = JSON.parse(this.response);
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


  


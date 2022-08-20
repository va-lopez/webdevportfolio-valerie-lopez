import React from 'react';
import Project from '../Project'
import employeeAidePic from '../../assets/large/employeeAide.PNG'
import weatherDashboard from '../../assets/large/weatherDashboard.png';
import noteTaker from '../../assets/large/noteTaker.png';
import codingQuiz from '../../assets/large/coding_quiz.png';
import passwordGenerator from '../../assets/large/password_gen_preview.png';


function Portfolio() {
  // const projectCard = Project;
  const projectData = [
    {
        id:1,
        name:"EmployeeAIDE",
        deployed: "https://employeeaide.herokuapp.com",
        img: {employeeAidePic},
        githubLink: "https://github.com/drkevinfriday/projectTwoFullStackz"
    },
    {
        id:2,
        name: "Weather Dashboard",
        deployed: "https://va-lopez.github.io/Server-Side-APIs_Weather-Dashboard",
        img: {weatherDashboard},
        githubLink: "https://github.com/va-lopez/Server-Side-APIs_Weather-Dashboard",
    },
    {
        id:3,
        name: "Coding Quiz",
        deployed: "https://va-lopez.github.io/Web_API_Challenge",
        img: {codingQuiz},
        githubLink: "https://github.com/va-lopez/Web_API_Challenge",
    },
    {
        id:4,
        name: "Note Taker",
        deployed: "https://express-11-taking-notes.herokuapp.com/",
        img: {noteTaker},
        githubLink: "https://github.com/va-lopez/11-Express-takingNotes",
    },
    {
        id:5,
        name: "Password Generator",
        deployed: "https://va-lopez.github.io/Javascript_Password_Generator/",
        img: {passwordGenerator},
        githubLink: "https://github.com/va-lopez/Javascript_Password_Generator",
    }
]

const content = projectData.map((indivProject) => 
    <Project key={indivProject.id} 
    id = {indivProject.id} 
    name={indivProject.name} 
    deployed ={indivProject.deployed} 
    img = {indivProject.img} 
    githubLink = {indivProject.githubLink}/>
)

  return (
    <section id="portfolio">
        {content}
    </section>
  );
};

export default Portfolio;
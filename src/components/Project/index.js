import React, {useEffect} from 'react';
import gitHubImage from '../../assets/small/GitHub-Mark-32px.png';

function Project(entry) {
  return (
          <div className = "projectCard">
            <h3>{entry.name}</h3>
            <a href={entry.deployed}></a>
            <a href ={entry.githubLink}><img src ={gitHubImage}/></a>
          </div>
    );
}

export default Project;

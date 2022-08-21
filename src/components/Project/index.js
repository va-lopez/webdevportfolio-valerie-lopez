import React from 'react';
import gitHubImage from '../../assets/small/GitHub-Mark-32px.png';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Card';

function Project(entry) {
  return (
    <Card border = "light" className="text-center m-3" style={{minWidth: "30%", maxWidth:"50%", margin:"10px"}}>
      <Card.Header as = "h5">{entry.name}</Card.Header>
      <Card.Img src= {entry.img}/>
      <Button variant = "primary"><a href={entry.deployed} style= {{textDecoration:"none"}}>Deployed App</a></Button>
      <Button variant = "primary"><a href={entry.githubLink} style ={{textDecoration:"none"}}>Github Repo</a></Button>
    </Card>
  );
}

export default Project;

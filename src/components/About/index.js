import React from 'react';
import bioPic from '../../assets/cover/bio-pic.jpg'

function About() {
  return (
    <section id="about" style={{width:"100%"}} className = "p-4">
      <div id="jumbotron" className ="transparent-bg">
        <h1 className = "w-6"> About Me </h1>
        <div className = "bio">
          <img src = {bioPic} className = "bioPic" id = "profilePic" style = {{width: "20%", height: "auto"}}/>
          <p className = "bioText">
            Born in South Texas, otherwise known as the 'Rio Grande Valley' or the 'the valley' to other natives, I moved to Austin 9 years ago where I attened The University of Texas at Austin. I graduated in 2017 with two degrees, one in Radio-Televsion and Film from the Moody College of Communication and the other in Mathematics from the School of Natural Sciences. Growing up, I've always had one foot set exploring my creative interest and the other foot planted firmly in math and tech. Over the years, I further dove into the creative industry pursuing motion graphics and gaining experience in 2d/3d animation, illustration, and design. Eventually I found that I gravitated more towards where design intersects with math and technology.<br></br><br></br>In hopes of finding a career that work within those intersections, I enrolled in a 24-week coding bootcamp managed by Triology and the University of Texas at Austin. This portfolio is meant to showcase and document the types of projects I've been exposed to during this journey.<br></br><br></br>While I'm not working on illustrations or honing my coding skills, some of my hobies include reading comics/web novels, boxing, and hanging with my dog around the city.
          </p>
        </div>  
      </div>
    </section>
  );
}

export default About;
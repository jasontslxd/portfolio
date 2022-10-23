import React from "react";
import './Home.css';
import liverpool from '../assets/liverpool.jpeg';

function Home() {
  return (
    <div className="home">
      <br/>
      <div className="container">
        <div className="row align-items-center">
          <h1 className="home-title">Hi, I am Jason. Welcome to my profile</h1>
          <p className="home-intro">
            This website is a single page React app that I built to refresh some of the basics of web development. 
            I like writing code to solve real world problems. I have also recently been into bouldering, and I 
            am also a huge Liverpool fan. Not sure what else to put here so have a nice day :)
          </p>
          <img className="home-intro" src={liverpool} alt="liverpool" />
        </div>
      </div>
    </div>  
  );
}

export default Home;
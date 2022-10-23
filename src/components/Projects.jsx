import React from "react";
import './Projects.css';
import shadowdefend from '../assets/shadowdefend.png';
import pqwgan from '../assets/pqwgan.png';

function Projects() {
  return (
    <div className="projects">
      <br />
      <div className="container">
        <div className="row align-items-center">
          <h1>Projects</h1>
          <p>
            A list of my projects can be found in&nbsp;
            <a className="link" href="https://github.com/jasontslxd" target="blank">
              my github repository
            </a>.
            Here are some of the more interesting ones.
          </p>

          <h3>PQWGAN</h3>
          <p>
            Code written in python to run the quantum circuit simulations for my thesis.
            The github repository is found <a className="link" href="https://github.com/jasontslxd/PQWGAN" 
            target="blank">here</a>.
          </p>
          <a href="https://github.com/jasontslxd/PQWGAN" target="blank">
            <img class="image" src={pqwgan} alt="pqwgan"/>
          </a>

          <h3>ShadowDefend</h3>
          <p>
            A tower defence game for an assignment written in Java using the Bagel library 
            developed by one of the tutors at the university. Learned a lot about object 
            oriented programming and software design in that project. The github repository is found&nbsp;
            <a className="link" href="https://github.com/jasontslxd/ShadowDefend" target="blank">here</a>.
          </p>
          <a href="https://github.com/jasontslxd/ShadowDefend" target="blank">
            <img class="image" src={shadowdefend} alt="shadowdefend"/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
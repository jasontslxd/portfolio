import React from "react";
import { NavLink } from "react-router-dom";
import './Projects.css';
import shadowdefend from '../assets/shadowdefend.png';
import pqwgan from '../assets/pqwgan.png';
import pqwgan_samples from '../assets/pqwgan_samples.png';
import yt_clone from '../assets/yt-clone.png';

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
            Patch quantum Wasserstein generative adversarial networks. It is a quantum generative adversarial network (QGAN) framework developed
            for my thesis that achieves state of the art performance in image generation with QGANs. The code to run the simulations are written in 
            python, and are ran on HPC services. The github repository is found <a className="link" href="https://github.com/jasontslxd/PQWGAN" 
            target="blank">here</a>.
          </p>
          <figure>
            <a href="https://github.com/jasontslxd/PQWGAN" target="blank">
              <img class="image" src={pqwgan} alt="pqwgan circuit"/>
            </a>
            <figcaption className="caption">Quantum circuit diagram for the quantum generator.</figcaption>
          </figure>

          <figure>
            <a href="https://github.com/jasontslxd/PQWGAN" target="blank">
              <img class="image" src={pqwgan_samples} alt="pqwgan outputs"/>
            </a>
            <figcaption className="caption">Sample outputs from the PQWGAN framework compared to WGAN-GP (classical machine learning) and real images.</figcaption>
          </figure>

          <h3>ShadowDefend</h3>
          <p>
            A tower defence game for an assignment written in Java using the Bagel library 
            developed by one of the tutors at the university. Learned a lot about object 
            oriented programming and software design in that project. The github repository is found&nbsp;
            <a className="link" href="https://github.com/jasontslxd/ShadowDefend" target="blank">here</a>.
          </p>
          <figure>
            <a href="https://github.com/jasontslxd/ShadowDefend" target="blank">
              <img class="image" src={shadowdefend} alt="shadowdefend"/>
            </a>
            <figcaption className="caption">Screenshot from the game.</figcaption>
          </figure>

          <h3>YouTube clone</h3>
          <p>
            A simple clone of YouTube using React that has a search bar, a video player, and 5 related videos on the side bar. Uses
            axios to communicate with the YouTube API. Default search term returns a YouTube video of Valorant from my channel. 
            The app can be found <NavLink className="link" to="/yt-clone">here</NavLink>. The source code is found in the 
            src/components/yt-clone folder in <a className="link" href="https://github.com/jasontslxd/portfolio" 
            target="blank">here</a>.
          </p>
          <figure>
            <NavLink className="link" to="/yt-clone">
              <img class="image" src={yt_clone} alt="youtube clone"/>
            </NavLink>
            <figcaption className="caption">Screenshot from the YouTube clone app.</figcaption>
          </figure>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Projects;
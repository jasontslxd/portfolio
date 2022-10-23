import React from "react";
import './Personal.css';
import profile_image from '../assets/IMG_1760.jpeg';
import thesis from '../assets/thesis.pdf';

function Personal() {
  return (
    <div className="info">
      <br/>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
              <img className="img-fluid profile-pic" src={profile_image} alt="profile"/>
            </div>
            <div className="col-md-8">
              <h1>Shu Lok Tsang</h1>
              <p>
                I am a final semester masters student at the University of Melbourne. During my final year, 
                I was part of the <a className="link" href="https://www.quantumelectronics.org/home" target="blank">Quanics Lab</a> 
                &nbsp;team, where I was involved in researching quantum machine learning methods. My final year 
                thesis was on quantum generative adversarial networks, which you can read&nbsp;
                <a className="link" href={thesis} target="blank">here</a>.
              </p>
              <a className="link" 
              href="https://docs.google.com/document/d/1dvkCp5vxJszppdZsSGCsf_kU0fnhyqqw/edit?usp=sharing&ouid=103435058220136887646&rtpof=true&sd=true" 
              target="blank">
                View my CV
              </a>
            </div>
        </div>
        <br/>
        <div className="row align-items-center">
          <h2>Education</h2>
          <p>2021 - 2022: Master of Computer Science, University of Melbourne</p>
          <p>2020 - 2020: Master of Engineering (Software Engineering), University of Melbourne
            (Transferred to Computer Science)
          </p>
          <p>2017 - 2019: Bachelor of Science, University of Melbourne</p>
        </div>
        <br/>
        <div className="row align-items-center">
          <h2>Work experience</h2>
          <p>
            January 2021 - February 2021: Intern, Technical Services Division, 
            Hong Kong Police Force, Hong Kong
          </p>
          <p>
            January 2019 - February 2019: Office Administrator, Yick Fung Global Industrial Limited, Hong Kong 
          </p>
        </div>
        <br/>
      </div>
    </div>
  );
}

export default Personal;
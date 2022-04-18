import React from "react";
import img from '../../Images/IMG20220413202555.jpg';
import './About.css'
const About = () => {
  return (
    <div className="about">
      <div className="row mx-auto">
        <div className="col-sm-4 col-md-6 about-text"><h4>Hello, I'm Sumaya. Student of English Language, Literature and Linguistics at Eden Mohila College. Though I'm a student of English Literature, I have much fond about programming, In future I want be a best Web Developer, In Sha Allah! </h4></div>
      
      
          <div className="col-4 col-md-2 "><figure className="figure">
            <img src={img} className="figure-img img-fluid rounded" alt=""/>
        </figure></div>
      </div>
    </div>
  );
};

export default About;

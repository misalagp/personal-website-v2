// ProjectsComponent.js
import React from 'react';
import Fade from 'react-reveal/Fade';

const ProjectsComponent = () => {
  return (
    <div className='container'>
      <div className="grid push-up">
        <h1 className='second-pg'>
          <span>A bit about</span> 
          <span>my experience</span>
        </h1>
        <div>
        <Fade bottom>
          <p>
            As a person with close to 4 years of experience in the field of web design and frontend development, I am known for being reliable and consistently delivering high-quality work, ensuring that projects are completed within deadlines without compromising on quality. I excel in collaborating closely with design and marketing team, ensuring seamless integration of visuals and functionality.
          </p>
        </Fade>
        
          <p>I have been working in Bay42, a software development partner of Perform<sup>[cb]</sup>.{' '}
            My role of frontend developer on one of the projects included (but was not limited to): 
            <ul>
            <Fade bottom><li>Maintenance, continuous development and optimization of the website's appearance and functionality in consultation with a client</li></Fade>
            <Fade bottom><li>Full website rebranding</li><li>Working with the marketing department to ensure the website 
              meets the company's needs and goals</li></Fade>
              <Fade bottom><li>Analyzing heatmaps data to understand in-app 
              interactions and identify roadblocks in the user journey</li></Fade>
              <Fade bottom><li>SEO optimizations</li></Fade>
              <Fade bottom><li>Website performance analysis</li></Fade>
              <Fade bottom><li>Sprint planning (tasks, estimations, due dates, reviews...)</li></Fade>
              <Fade bottom><li>Quality assurance</li></Fade>
              <Fade bottom><li>Code refactoring</li></Fade>
              <Fade bottom><li>Documentation of the work steps</li></Fade>
              <Fade bottom><li>Implementation of email signatures</li></Fade>
            </ul>
           </p>
          
        </div>
      </div>
    </div>
  );
};

export default ProjectsComponent;

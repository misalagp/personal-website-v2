// BioComponent.js
import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import DottedLineScroll from './DrawSvg';
import Fade from 'react-reveal/Fade';


const BioComponent = () => {
  return (
    <Parallax speed={0}>
      <div className="grid push-up">
        <h1>
          <span>Frontend dev</span> 
          <span>Web designer</span>
          <span>Wordpress dev</span>

        </h1>
        <div>
          <p>
            I love bringing things to life on the internet. My journey into web development kicked off around 2012 when I decided to play around with customizing Tumblr themes. This experience taught me a wealth of knowledge about HTML, CSS and design principles, setting the foundation for my ongoing exploration in the field.
          </p>
          <Fade bottom>
            <p>
              As a dedicated enthusiast of WordPress, the ongoing transformations in this flexible platform never fail to pique my interest. WordPress powers over 40% of the internet, that's a testament to its enduring impact and adaptability. 
            </p>
          </Fade>
          <Fade bottom>
            <p>  
              While my love for WordPress remains steadfast, my current endeavors revolve around enriching my knowledge in web design. Engaging in side projects, i involve myself in the React framework, appreciating its dynamic capabilities and user-centric approach. Additionally, my focus on accessibility and SEO underscores my commitment to creating digital experiences that are not only visually appealing but also inclusive and optimized for search engines. In this journey of continuous learning, I'm dedicated to staying at the forefront of web design advancements, making each project an opportunity for growth and innovation.
            </p>
          </Fade>
        </div>
      </div>
    </Parallax>
  );
};

export default BioComponent;

// App.js
import React, { useState } from 'react';
import './App.scss'; // Import your CSS for styling
import BioComponent from './BioComponent';
import ProjectsComponent from './ProjectsComponent';
import FindMeComponent from './FindMeComponent'
import { Parallax } from 'react-scroll-parallax';
import DottedLineScroll from './DrawSvg';
const App = () => {
  const [bg, setBg] = useState('bio');

  const handleLinkClick = (newBg) => {
    setBg(newBg);
  };

  const getBackgroundColor = () => {
    switch (bg) {
      case 'bio':
        return 'linear-gradient(rgba(35,31,32,0) 5vh,#231f20 20vh)';
      case 'projects':
        return 'linear-gradient(rgba(232,228,210,0) 5vh,#e8e4d2 20vh)';
      case 'find-me':
        return 'linear-gradient(rgba(226,105,97,0) 5vh,#e26961 20vh)';
      default:
        return '';
    }
  };

  const renderComponent = () => {
    switch (bg) {
      case 'bio':
        return <BioComponent />;
      case 'projects':
        return <ProjectsComponent />;
      case 'find-me':
        return <FindMeComponent />;
      default:
        return null;
    }
  };

  const openWorkComponentWindow = () => {
    const newWindow = window.open('Demos.html', '_blank');
  };

  return (
    <div id="app">
      {/* <DottedLineScroll /> */}

      <div className={`bg ${bg}`}>
        <header>
          <nav>
            <ul>
              <li><a className="link-bio" href="#bio" onClick={() => handleLinkClick('bio')}>Bio</a></li>
              <li><a className="link-projects" href="#projects" onClick={() => handleLinkClick('projects')}>Work</a></li>
              <li><a className="link-find-me" href="#findme" onClick={() => handleLinkClick('find-me')}>Find Me</a></li>
              <li><a className="link-work" href="#demos" onClick={openWorkComponentWindow}>Projects</a></li>
            </ul>
          </nav>
          <div className={`transition transition-${bg}`}></div>
          <div className="dots dots1"></div>
          <div className="dots dots2"></div>
          <Parallax speed={-15}>
            <h1>Misala</h1>
          </Parallax>
        </header>
        <div style={{ backgroundImage: getBackgroundColor() }}>
          <main><div className='container'>{renderComponent()}</div></main>
        </div>
      </div>
    </div>
  );
};

export default App;

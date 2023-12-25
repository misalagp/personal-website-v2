import React, { useEffect, useState } from 'react';

const DottedLineScroll = () => {
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    const path = document.querySelector('.dynamic path');
    const pathLength = path.getTotalLength();
    setPathLength(pathLength);

    path.style.strokeDasharray = pathLength + ' ' + pathLength;
    path.style.strokeDashoffset = pathLength;

    const handleScroll = () => {
      const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
      const drawLength = scrollPercentage * pathLength;
  
      //draw in reverse
      path.style.strokeDashoffset = pathLength - drawLength;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathLength]);

  return (
    <div className="dynamic">
      <svg preserveAspectRatio="xMidYMid meet" strokeWidth="4" viewBox="0 0 709 2023" fill="none">
        <path d="M0.5 0.500122C418 532 106 725.5 83.5 1003.5C30.2195 1661.81 1460.68 1106.82 160.5 2022" stroke="white"/>
      </svg>
    </div>
  );
};

export default DottedLineScroll;

import React from 'react';
import { aboutUsInfo } from '../utils/aboutUsInfo';
import AboutList from './AboutList';
function About() {
  return (
    <div className='grid grid-cols-2 gap-12 px-40 h-36 my-8'>
    <div className='bg-about bg-cover bg-no-repeat'></div>
      <div>
        <h1>ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
        <div>
            <h2>Why Choose Us?</h2>
            <AboutList data={aboutUsInfo} />
        </div>
      </div>
    </div>
  );
}

export default About;

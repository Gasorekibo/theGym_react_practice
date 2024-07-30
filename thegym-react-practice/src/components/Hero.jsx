import React from 'react';
import Button from './Button';
function Hero() {
  return (
    <>
      <div className="bg-hero bg-cover bg-no-repeat object-contain h-screen brightness-75 relative"></div>
      <div className="container mx-auto flex items-center justify-center absolute bottom-28 w-2/6 right-96">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white opacity-100 ">
          WE ARE A LANDING PAGE
          </h1>
          <p className="text-white text-lg mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
            dapibus leo nec ornare diam sed commodo nibh ante facilisis
            bibendum.
          </p>
          <Button text='LEARN MORE'/>
        </div>
      </div>
    </>
  );
}

export default Hero;

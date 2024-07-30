import React from 'react';
import FeatureCard from './FeatureCard';
function Features() {
  const card = [
    {
      id: 1,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6b0FD2v7L8lvytd70YNCJuH1C2RKZL_gC8A&s',
      title: 'Lorem ipsum',
      description:
        'Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.',
    },
    {
      id: 2,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6b0FD2v7L8lvytd70YNCJuH1C2RKZL_gC8A&s',
      title: 'Good morning',
      description:
        'Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.',
    },
    {
      id: 3,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6b0FD2v7L8lvytd70YNCJuH1C2RKZL_gC8A&s',
      title: 'Good morning',
      description:
        'Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.',
    },
  ];
  return (
    <div>
      <div className="container mx-auto flex items-center justify-center mt-4">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-primary">FEATURES</h1>
          <FeatureCard data={card} />
        </div>
      </div>
    </div>
  );
}

export default Features;

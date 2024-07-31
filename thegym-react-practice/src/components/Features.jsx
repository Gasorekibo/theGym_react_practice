import React from 'react';
import FeatureCard from './FeatureCard';
import { featureData } from '../utils/featureData';
function Features() {
 
  return (
    <div>
      <div className="container mx-auto flex items-center justify-center mt-4">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-primary">FEATURES</h1>
          <FeatureCard data={featureData} />
        </div>
      </div>
    </div>
  );
}

export default Features;

import React from 'react';

function FeatureCard({ data }) {
  return (
    <div className="flex justify-evenly gap-8 px-28 mb-8">
      {data.map((ele) => (
        <div key={ele.id} className="">
          <img
            src={ele.img}
            alt=""
            className="bg-secondary h-24 w-24 rounded-full block my-6 mx-auto"
          />

          <h1 className="text-black font-bold text-center my-4">{ele.title}</h1>
          <p className="w-full text-left">{ele.description}</p>
        </div>
      ))}
    </div>
  );
}

export default FeatureCard;

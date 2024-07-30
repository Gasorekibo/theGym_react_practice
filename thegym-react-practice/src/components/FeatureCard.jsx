import React from 'react';

function FeatureCard({ data }) {
  return (
    <div className="flex justify-evenly gap-4 px-28 mb-8">
      {data.map((ele) => (
        <div key={ele.id} className="">
          <img
            src={ele.img}
            alt=""
            className="bg-secondary h-14 w-14 rounded-full block my-6 mx-auto"
          />

          <h1 className="text-black font-bold">{ele.title}</h1>
          <p className="w-full">{ele.description}</p>
        </div>
      ))}
    </div>
  );
}

export default FeatureCard;

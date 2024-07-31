import React from 'react'

function AboutList({data}) {
  return (
    <div>
        {data.map((ele, idx) => (
            <div key={idx} className="flex justify-evenly gap-8 px-28 mb-8">
            <p>{ele}</p>
            </div>
        ))}
    </div>
  )
}

export default AboutList
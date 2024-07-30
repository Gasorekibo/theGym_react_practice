import React from 'react';

function Button({text, appear}) {
  return (
    <button className="text-white px-10 py-2 rounded-full mt-4 bg-secondary">
      {text}
    </button>
  );
}

export default Button;

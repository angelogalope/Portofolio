import React from 'react';

const Loading = () => {
  return (
    <div className="loading flex justify-center items-center h-screen">
      <img
        src="images/angelo.png"
        alt="Logo"
        className="w-[343px] h-[343px] centered-image animate-fade-in opacity-0 animate-delay" // Add the new animation classes
      />
    </div>
  );
};

export default Loading;
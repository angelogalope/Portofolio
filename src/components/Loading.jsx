import React from 'react';

const Loading = () => {
  return (
    <div className="loading flex justify-center items-center h-screen">
      <img
        src="images/angelo.png"
        alt="Logo"
        className="w-[243px] h-[243px] sm:w-[300px] sm:h-[300px] md:w-[343px] md:h-[343px] centered-image animate-fade-in opacity-0 animate-delay"
      />
    </div>
  );
};

export default Loading;
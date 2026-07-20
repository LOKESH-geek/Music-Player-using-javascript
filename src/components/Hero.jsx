import React from 'react'

function Hero() {
  return (
    <section>
    <div className="flex flex-col justify-center items-center gap-4 h-screen">
      <div className="flex flex-col justify-center items-center gap-4 ">

        <h1 className="text-3xl font-semibold font-sans flex justify-center margin:0 items-center mask-linear-from-neutral-500
        bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent
        flex-gap-6  ">Welcome to the Music Player</h1>
        <h2>
          <span className="ml-2"> Seamless </span>
          <span className="text-cyan-300 ml-2 font-bold font-sans" >listening experience</span> on this <br/>
          <span className="text-cyan-300 ml-2 justify-between font-bold font-sans">web</span> music player
        </h2>
     </div>
    </div>
    </section>
  );
}   

export default Hero;
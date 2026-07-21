import React from 'react'

function Hero() {
  return (
    <section>
    <div className="flex flex-col justify-center items-center gap-4 h-screen">

      <div className="flex flex-col justify-center items-center gap-4 ">

         <h1 className="text-4xl font-extrabold font-sans flex justify-center margin:0 items-center mask-linear-from-neutral-500
        bg-gradient-to-r from-cyan-300 to-blue-600 bg-clip-text text-transparent
        flex-gap-6 text-[clamp(2.8rem,1vw,4.4rem)] leading-[0.95] drop-shadow-[0_20_0px_rgba(38,211,238,0.22)] tracking-tight  py-8">Welcome to the Music Player
        </h1>

        <h2 className="">

          <span className="text-xl ml-2 font-semibold"> Seamless </span>
          <span className="text-cyan-300 text-xl font-bold font-sans text-[clamp(1.6rem,1vw,4.4rem)] leading-[0.90] drop-shadow-[10_10_28px_rgba(34,211,238,0.22)] tracking-tight" >listening experience</span> <span className="font-semibold text-xl">on this</span> <br/>
          <span className="flex text-center justify-center">

            <span className="text-cyan-300 text-xl ml-2 font-bold font-sans text-[clamp(1.6rem,1vw,4.4rem)] leading-[0.98] drop-shadow-[0_0_28px_rgba(34,211,238,0.22)] tracking-tight">web</span> 
            <span className="ml-2 text-xl font-semibold">music player</span>

          </span>

        </h2>

     </div>

    </div>

    </section>
  );
}   

export default Hero;
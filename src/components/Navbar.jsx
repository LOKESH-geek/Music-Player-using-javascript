import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
  return (
  <nav>
   <div>
        <h2 className="text-xl font-bold font-serif text-purple-500  ">Music Player</h2>
     
   
        <Link to="/">Home</Link>
   </div>


  </nav>
  );
}

export default Navbar;
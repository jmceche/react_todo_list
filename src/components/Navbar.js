import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/register'>Sign Up</Link>

      <Link to='/login'>Login</Link>
    </div>
  );
};

export default Navbar;

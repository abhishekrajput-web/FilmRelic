import React from 'react';
import { Searh, Logo } from "./";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 container mx-auto px-4">
      <Logo />
      <Searh />
    </div>
  )
}

export default Navbar;
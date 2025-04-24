import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link> | 
    <Link to="/about">About</Link> | 
    <Link to="/projects">Projects</Link> | 
    <Link to="/contact">Contact</Link> | 
    <Link to="/blog">Blog</Link>
  </nav>
);

export default Navbar;
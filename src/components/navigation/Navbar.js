/* eslint-disable import/no-extraneous-dependencies */
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function Navbar() {
  return (
    <nav>
      <h1 className="logo">Bookstore CMS</h1>
      <div>
        <span><Link className="nav-links" to="/">Home</Link></span>
        <span><Link className="nav-links" to="/categories">Categories</Link></span>
      </div>
      <span className="usr-icon-cont"><Icon className="icon" icon="mingcute:user-3-fill" /></span>
    </nav>
  );
}

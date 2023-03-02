import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <h1>Book Store</h1>
      <div>
        <span><Link to="/">Home</Link></span>
        <span><Link to="/categories">Categories</Link></span>
      </div>
    </nav>
  );
}

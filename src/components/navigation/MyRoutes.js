import { Route, Routes } from 'react-router-dom';
import Categories from '../myPages/Categories';
import Books from '../myPages/Books';
import Navbar from './Navbar';

export default function MyRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element=<Books /> />
        <Route path="categories" element=<Categories /> />
      </Routes>
    </>
  );
}

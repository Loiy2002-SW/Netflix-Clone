import { Routes, Route } from 'react-router';
import './App.css';
import Home from './components/home/Home';
import FavoriteMovies from './components/favoriteMovies/FavoriteMovies';
import Header from './components/header/Header';

export default function App() {
  return (

    
  
    <>
    <Header/>
    <Routes>
      
      <Route path='/' element={<Home />} />
      <Route path='/favoriteMovies' element={<FavoriteMovies />} />

    </Routes>
    </>

  );
}


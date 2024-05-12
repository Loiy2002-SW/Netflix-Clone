import { Routes, Route } from 'react-router';
import './App.css';
import Home from './components/home/Home';
import FavList from './components/favList/FavList';
import Header from './components/header/Header';

export default function App() {
  return (

    
  
    <>
    <Header/>
    <Routes>
      
      <Route path='/' element={<Home />} />
      <Route path='/favList' element={<FavList />} />

    </Routes>
    </>

  );
}


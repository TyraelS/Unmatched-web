import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Game from './pages/Game';
import Profile from './pages/Profile';
import Header from './Header';

const App = () => {
  return (
    <main className='wrapper'>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </main>
  );
}

export default App;

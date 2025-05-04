// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Envrend from './pages/envrend.jsx';
import Entered from './pages/Entered.jsx';
import Test from './pages/test.jsx';
import Tech from './pages/techinfo&abtme.jsx';
import EnteredConsole from './pages/entered(console).jsx';
import Hobbies from './pages/music&hobbies.jsx';
import EnteredHobbies from './pages/entered(hobbies).jsx';
import EnteredPassion from './pages/entered(passion).jsx';
import Passion from './pages/passion&habits.jsx';


function App() {
  return (
    
      <main className='main-content'>
        <Routes>
          <Route path="/gr" element={<Envrend/>} />
          <Route path="/er" element={<Entered/>} />
          <Route path="/" element={<Test/>} />
          <Route path="/tech/abtme" element={<Tech/>} />
          <Route path="/entered(console)" element={<EnteredConsole/>} />
          <Route path="/tech/music" element={<Hobbies/>} />
          <Route path="/entered(hobbies)" element={<EnteredHobbies/>} />
          <Route path="/entered(passion)" element={<EnteredPassion/>} />
          <Route path="/tech/passion" element={<Passion/>} />



        </Routes>
      </main>
    
  );
}

export default App;

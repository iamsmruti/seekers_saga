import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute';

// Page Imports
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Puzzle from './pages/Puzzle';
import Hunt from './pages/Hunt';
import PuzzleOne from './pages/Puzzle/Puzzle1';
import HuntOne from './pages/Hunt/Hunt1';
import Leaderboard from './pages/Leaderboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />}/>

        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Home />} />
          <Route path="/puzzles" element={<Puzzle />} />
          <Route path="/puzzles/:id" element={<PuzzleOne />} />
          <Route path="/hunts" element={<Hunt />} />
          <Route path="/hunts/:id" element={<HuntOne />} />
          <Route path="/leaderboard/:id" element={<Leaderboard /> } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

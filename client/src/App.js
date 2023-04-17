import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Puzzle from './pages/Puzzle';
import Hunt from './pages/Hunt';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />}/>

        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Home />} />
          <Route path="/puzzles" element={<Puzzle />} />
          <Route path="/hunts" element={<Hunt />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

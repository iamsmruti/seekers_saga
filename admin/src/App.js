import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/Login';
import Home from './pages/Home';
import Users from './pages/Users';
import Profile from './pages/Profile';
import Puzzles from './pages/Puzzles';
import Hunts from './pages/Hunts';
import AddPuzzle from './pages/Puzzles/subpages/AddPuzzle';
import AddHunt from './pages/Hunts/subpages/AddHunt';

function App() {
  return (
    <Router>
      <Routes>
        {/* Unprotected Routes */}
        <Route path="/login" element={<Login />}/>

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path='/' element={<Home />}/>
          <Route path='/users' element={<Users />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/puzzles' element={<Puzzles />}/>
          <Route path='/add-puzzle' element={<AddPuzzle />}/>
          <Route path='/hunts' element={<Hunts />}/>
          <Route path='/add-hunt' element={<AddHunt />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

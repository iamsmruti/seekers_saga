import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/Login';
import Home from './pages/Home';
import Users from './pages/Users';
import Profile from './pages/Profile';
import Puzzles from './pages/Puzzles';
import Hunts from './pages/Hunts';

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
          <Route path='/hunts' element={<Hunts />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route>
        <Route path='/' element={<>Home</>}/>
        
      </Route>
    </Router>
  );
}

export default App;

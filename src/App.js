import './App.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Login from '../src/components/Login';
import Home from '../src/container/Home';

function App() {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='/*' element={<Home />} />

    </Routes>
    
  );
}

export default App;

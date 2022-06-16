import './App.css';
import {Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Browse from './pages/Browse'
import MyCoins from './pages/MyCoins';
import Registrate from './pages/Registrate';
import Login from './pages/Login'
import Callback from './pages/Callback';



function App() {

  return (

    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Browse />} />
        <Route path='/mycoins' element={<MyCoins />} />
        <Route path='/registrate' element={<Registrate />} />
        <Route path='/login' element={<Login />} />
        <Route path='/callback' element={<Callback />} />
        {/* <Route path='/profile' element={<Profile />} /> */}
      </Routes>
    </div>

  );
}

export default App;

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import UsersContainer from './components/Users/UsersContainer';

const App = () => {
  return(
    <BrowserRouter>
    <div className="app_wrapper">
     <Header />
     <Navbar />
     <Routes>
     <Route path="/profile" element={<Profile />} />
     <Route path="/users" element={<UsersContainer/>} />
     </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;

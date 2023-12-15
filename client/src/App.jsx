import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from 'E:/3rd Year/5th Sem/DBMS/End Sem/mern-auth/client/src/pages/Profile.jsx';
import Header from './components/Header';
import Details from './pages/Details';
import InsertData from './pages/InsertData';
import GenerateQR from './pages/GenerateQR';


export default function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/details' element={<Details />} />
          <Route path='/insert-data' element={<InsertData />} />
          <Route path='/generate-qr' element={<GenerateQR />} />
        </Routes>
    </BrowserRouter>
  );
}
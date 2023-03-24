import { Route, Routes } from 'react-router-dom';
import './App.css';
import FirstPage from './Pages/FirstPage/FirstPage';
import SecondPage from './Pages/secondPage/SecondPage';
import ThirdPage from './Pages/ThirdPage/ThirdPage';
import Showtest from './propselem/Showtest/Showtest';


function App() {
  return (
      <Routes>
        <Route path='/' element={<FirstPage/>} />
        <Route path='/secondPage' element={<SecondPage />} />
        <Route path='/showtest' element={<Showtest />} />
        <Route path='/thirdPage' element={<ThirdPage/>}/>
      </Routes>
  );
}

export default App;
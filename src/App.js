import { Route, Routes } from 'react-router-dom';
import './App.css';
import Marketingblock from './components/Marketingblock/Marketingblock';
import Projectbrief from './components/Projectbrief/Projectbrief';
import HomePage from './Pages/HomePage/HomePage';
import FirstPage from './Pages/FirstPage/FirstPage';
import SecondPage from './Pages/secondPage/SecondPage';
import ThirdPage from './Pages/ThirdPage/ThirdPage';
import Showtest from './propselem/Showtest/Showtest';


function App() {
  return (
    <div className="container">
      <HomePage/>
      <Showtest/>
      <Projectbrief/>
      <Marketingblock/>
      </div>
      <Routes>
        <Route path='/' element={<FirstPage/>} />
        <Route path='/secondPage' element={<SecondPage />} />
        <Route path='/showtest' element={<Showtest />} />
        <Route path='/thirdPage' element={<ThirdPage/>}/>
      </Routes>
      
  );
}

export default App;
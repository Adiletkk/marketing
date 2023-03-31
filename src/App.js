import { Route, Routes } from 'react-router-dom';
import './App.css';
import MarketingBlog from './Pages/FifthPage/MarketingBlog';

import FirstPage from './Pages/FirstPage/FirstPage';
import CaseStudios from './Pages/fourth_page/CaseStudios';
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
      <Route path='/CaseStudios' element={<CaseStudios/>}/>
      <Route path='/MarketingBlog' element={<MarketingBlog/>}/>
      </Routes>
      
  );
}

export default App;
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import MarketingBlog from './Pages/FifthPage/MarketingBlog';

import FirstPage from './Pages/FirstPage/FirstPage';
import CaseStudios from './Pages/fourth_page/CaseStudios';
import RegistionPage from './Pages/Registration/RegistionPage';
import SecondPage from './Pages/secondPage/SecondPage';
import Detalis from './Pages/Sixth/Detalis';
import ThirdPage from './Pages/ThirdPage/ThirdPage';
import Showtest from './propselem/Showtest/Showtest';



function App() {
  return (

    <div className="container">


      <Routes>
        <Route path='/' element={<FirstPage />} />
        <Route path='/secondPage' element={<SecondPage />} />
        <Route path='/showtest' element={<Showtest />} />
        <Route path='/thirdPage' element={<ThirdPage />} />
        <Route path='/CaseStudios' element={<CaseStudios />} />
        <Route path='/MarketingBlog' element={<MarketingBlog />} />
        <Route path='/Detalis' element={<Detalis />} />
        <Route path='/RegistionPage' element={<RegistionPage />} />
        <Route path='/About' element={<About />} />
      </Routes>

    </div>

  );
}

export default App;
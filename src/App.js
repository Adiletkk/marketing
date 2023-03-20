import './App.css';

import Footer from './components/footer/Footer';
import OfflineSeo from './components/offlineSeo/OfflineSeo';
import HomePage from './Pages/HomePage/HomePage';
import HomePart from './Pages/House_Part/HomePart';
import SecondPage from './Pages/secondPage/SecondPage';

import HomePage from './Pages/HomePage/HomePage';
import Showtest from './propselem/Showtest/Showtest';

function App() {
  return (
    <div className="container">

      <HomePage />
      <HomePart />
      <Footer />
      <OfflineSeo />
      <SecondPage />

      <HomePage/>\
      <Showtest/>

    </div>
  );
}

export default App;
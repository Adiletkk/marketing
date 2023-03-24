import './App.css';
import Marketingblock from './components/Marketingblock/Marketingblock';
import Projectbrief from './components/Projectbrief/Projectbrief';
import HomePage from './Pages/HomePage/HomePage';
import Showtest from './propselem/Showtest/Showtest';

function App() {
  return (
    <div className="container">
      <HomePage/>
      <Showtest/>
      <Projectbrief/>
      <Marketingblock/>
      </div>
  );
}

export default App;
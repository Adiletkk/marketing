import './App.css';
import PriceInfo from './components/layout-userLock/PriceInfo';
import TeamInfo from './components/userBlock/TeamInfo';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <div className="container">
      <HomePage/>
      <TeamInfo/>
      <PriceInfo/>
    </div>
  );
}

export default App;
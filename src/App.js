import './App.css';
import Footer from './components/footer/Footer';
import HomePage from './Pages/HomePage/HomePage';
import HomePart from './Pages/House_Part/HomePart';

function App() {
  return (
    <div className="container">
      <HomePage />
      <HomePart/>
      <Footer />
    </div>
  );
}

export default App;
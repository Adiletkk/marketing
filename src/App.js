import './App.css';
import DevCommentsBlock from './components/devComemmentsBLock/DevCommentsBlock';
import Faqs from './components/faqs/Faqs';
import PriceInfo from './components/layout-userLock/PriceInfo';
import Posts from './components/posts/Posts';
import TeamInfo from './components/userBlock/TeamInfo';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <div className="container">
      <HomePage/>
      <TeamInfo/>
      <PriceInfo/>
      <Faqs/>
      <DevCommentsBlock/>
      <Posts/>
    </div>
  );
}

export default App;
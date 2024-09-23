// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import Header from './Pages/Header';
import Hero from './Pages/Hero';
import Ads from './Pages/Ads.jsx';
import Featured from './Pages/Featured.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Ads />
      <Featured />
    </div>
  );
}

export default App;

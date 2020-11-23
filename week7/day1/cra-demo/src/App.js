// import logo from './logo.svg';
import './App.css';
import SayHi from './SayHi'
import Navbar from './Navbar'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SayHi/>
      <Card/>
      <img src='/logo192.png'/>
    </div>
  );
}

export default App;

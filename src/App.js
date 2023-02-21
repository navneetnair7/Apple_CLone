import './App.css';
import Card from './components/card/Card';
import Iphone from './components/Iphone14/Iphone';
import IphoneHome from './components/Iphone14pro/IphoneHome';
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <IphoneHome />
      <Iphone />
      <Card />
    </div>
  );
}

export default App;

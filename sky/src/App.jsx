import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { DarkThemeToggle, Flowbite } from 'flowbite-react';

function App() {
  return (
    <div className="App">
      <Flowbite>
        <Home />
        <Navbar />
        <DarkThemeToggle />
      </Flowbite>
    </div>
  );
}

export default App;

import './App.css';
import Home from './Components/Home';
import { DarkThemeToggle, Flowbite } from 'flowbite-react';

function App() {
  return (
    <div className="App">
      <Flowbite>
        <Home />
        <DarkThemeToggle />
      </Flowbite>
    </div>
  );
}

export default App;

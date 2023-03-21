import logo from './logo.svg';
import './App.css';

import Greet from './components/Greet';

function App() {
  return (
    <div className="App">
      <Greet name='John'/>
      <Greet name='Martin'/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

import Greet from './components/Greet';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      {/* <Greet name='John'/>       */}
      <Message />
    </div>
  );
}

export default App;

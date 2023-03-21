import logo from './logo.svg';
import './App.css';

import Greet from './components/Greet';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Greet name='John' heroName='super man'/>      
      {/* <Message /> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;

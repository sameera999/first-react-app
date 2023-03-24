import logo from './logo.svg';
import './App.css';

import Greet from './components/Greet';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionalClick from './components/FunctionalClick';
import ClassClick from './components/ClassClick';
import EventBing from './components/EventBing';
import ParentComponent from './components/ParentComponent';


function App() {
  return (
    <div className="App">
      <ParentComponent />
      {/* <EventBing /> */}
      {/* <FunctionalClick /> */}
      {/* <ClassClick/> */}
      {/* <Greet name='John' heroName='super man'/>       */}
      {/* <Message /> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;

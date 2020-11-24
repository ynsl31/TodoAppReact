import './bootstrap.css';
import './App.css';
import { Component } from 'react';
import FirstComponent from './components/learning-examples/FirstComponent.jsx';
import SecComponent from './components/learning-examples/SecComponent';
import ThirdComponent from './components/learning-examples/ThirdComopent';
import TodoApp from './components/todo/TodoApp';

class App extends Component {
  render() {
    return (
      <div className="App">
      <TodoApp/>
      </div>
    );
  }
}

export default App;

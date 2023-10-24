import './App.css';

// Import our custom Component
import HelloComponent from './components/hello/hello.component'
import PersonComponent from './components/person/person.component'

const App = () => {
  // Sets a constant
  const greeting = 'Hello React'

  return (
    <div className="App">
      <header className="App-header">
        <h1>{ greeting }</h1>
      </header>
      <HelloComponent />

      <PersonComponent />
    </div>
  );
}

export default App;

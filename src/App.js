import './App.css';

// Import our custom Component
import HelloComponent from './components/hello/hello.component'

const App = () => {
  // Sets a constant
  const greeting = 'Hello React'

  return (
    <div className="App">
      <header className="App-header">
        <h1>{ greeting }</h1>
      </header>
      <HelloComponent />
    </div>
  );
}

export default App;

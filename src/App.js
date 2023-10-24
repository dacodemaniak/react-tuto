import './App.css';

const App = () => {
  // Sets a constant
  const greeting = 'Hello React'

  return (
    <div className="App">
      <header className="App-header">
        <h1>{ greeting }</h1>
      </header>
    </div>
  );
}

export default App;

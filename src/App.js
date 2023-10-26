import './App.css';

// Import fake datas
import persons from './datas/persons.data'

// Import our custom Component


const App = () => {
  // Sets a constant
  const title = 'Address book'

  return (
    <div className="App">
      <header className="App-header">
        <h1>{ title }</h1>
      </header>
    </div>
  );
}

export default App;

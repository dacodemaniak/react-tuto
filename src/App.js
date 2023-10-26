import './App.css';
import HeaderComponent from './components/person-list/header/header.component'
import BodyComponent from './components/person-list/body/body.component'
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

      <div className='book-list'>
        <table className='table table-striped table-condensed'>
          <HeaderComponent />
          <BodyComponent persons={persons} total={ persons.length }/>
        </table>
      </div>
    </div>
  );
}

export default App;

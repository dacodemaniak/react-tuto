import './App.css';
import HeaderComponent from './components/person-list/header/header.component'
import BodyComponent from './components/person-list/body/body.component'
// Import fake datas
import persons from './datas/persons.data'
import ToolbarComponent from './components/person-list/toolbar/toolbar-component';
import { useState } from 'react';

// Import our custom Component


const App = () => {
  // Sets a constant
  const title = 'Address book'

  const [personList, setPersonList] = useState(persons)
  
  const onDelete = (personId) => {
    // Sets a new const using filter method on personList
    const updatedList = personList.filter((person) => person.id != personId)
    // Pass new value to state
    setPersonList(updatedList)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{ title }</h1>
      </header>
      <ToolbarComponent total={ personList.length } />
      <div className='book-list'>
        <table className='table table-striped table-condensed'>
          <HeaderComponent />
          <BodyComponent persons={personList} total={ personList.length } deletePerson={onDelete} />
        </table>
      </div>
    </div>
  );
}

export default App;

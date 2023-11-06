import './App.css';
import HeaderComponent from './components/person-list/header/header.component'
import BodyComponent from './components/person-list/body/body.component'
import ToolbarComponent from './components/person-list/toolbar/toolbar-component';


// Import our custom Component


const App = () => {
  // Sets a constant
  const title = 'Address book'



  return (
    <div className="App">
      <header className="App-header">
        <h1>{ title }</h1>
      </header>
      <ToolbarComponent />
      <div className='book-list'>
        <table className='table table-striped table-condensed'>
          <HeaderComponent />
          <BodyComponent  />
        </table>
      </div>
    </div>
  );
}

export default App;

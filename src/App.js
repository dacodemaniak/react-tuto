import { QueryClient, QueryClientProvider, useQuery, } from 'react-query'
import personStore from './reducers/person-reducer'

import './App.css';
import HeaderComponent from './components/person-list/header/header.component'
import BodyComponent from './components/person-list/body/body.component'
import ToolbarComponent from './components/person-list/toolbar/toolbar-component';
import { fetchPerson } from './_helpers/person.service';
import { useEffect } from 'react';

const queryClient = new QueryClient()

const App = () => {
  // Sets a constant
  const title = 'Address book'

  /**
   * Retrieve data from API
   */
  const { setPersonList } = personStore()

  const { data, isLoading, isError} = useQuery(
    'persons',
    async () => {
      return await fetchPerson()
    }
  )
  // Use effects...
  useEffect(() => {
    if (data) {
      setPersonList(data)
    }
  }, [data, setPersonList])

  if (isLoading) {
    return <p>Loading data...</p>
  }

  if (isError) {
    return <p>There was an error fetching datas...</p>
  }
  return (
    // App is returned here
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

const AppWithQueryClient = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  )
}
export default AppWithQueryClient;

import { useState } from 'react'
import { SearchBar } from './components/SearchBar';
import { Heading } from './components/Heading';
import { SearchResultList } from './components/SearchResultList';
import './App.css'

function App() {
  const [results,setResults] = useState([]);

  return (
    <>
      <div>
         <div className='container'>
               <Heading/>
               <SearchBar setResults={setResults}/>
               <SearchResultList results={results}/>  
         </div>
      </div>
    </>
  )
}

export default App;

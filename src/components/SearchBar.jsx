import React ,{useState} from 'react'
import './searchbar.css';
import {FaSearch} from 'react-icons/fa';

export const SearchBar = ({setResults}) => {
  const [input,setInput]=useState("");
   
  const fetchData=(value)=>{
     fetch("https://jsonplaceholder.typicode.com/users").then((response)=>response.json()).then((json)=>{
      const results=json.filter((users)=>{
         return value && users && users.name && users.name.toLowerCase().includes(value);
      })
      setResults(results);
      console.log(results);
     });
  }

  const handleChange=(value)=>{
     setInput(value);
     fetchData(value);
  }
  return (
    <div className='Search'>
        <input type='search' placeholder='Type to search' value={input} onChange={(e)=>handleChange(e.target.value)}></input> <FaSearch  id="search-icon"/>
    </div>
  )
}

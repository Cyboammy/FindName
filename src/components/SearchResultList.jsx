import React from 'react'
import "./SearchResultList.css";
import { SearchResult } from './SearchResult';
export const SearchResultList = ({results}) => {
  return (
    <div className='box'>
      {
        results.map((result,id)=>{
           return <SearchResult className='box' key={id} result={result}/>
        })
      }
    </div>
  )
}

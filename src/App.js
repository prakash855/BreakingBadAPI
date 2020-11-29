import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';

const  App = () => {
  const [items, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('')
  useEffect(()=>{
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      // console.log(result.data);
      setItem(result.data)
      setIsLoading(false)
    }
    fetchItems()
  },[query])
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q)=>setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;

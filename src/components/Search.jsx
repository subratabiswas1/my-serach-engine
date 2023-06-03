import React,{useEffect,useState} from 'react';
import {useDebounce} from 'use-debounce';
import { useResultContext } from '../contexts/ResultContextProvider';
import Links from './Links';

const Search = () => {
  const [hide,setHide] = useState(true);
  const [text,setText] = useState('');
  const {setSearchTerm} = useResultContext();
  const [debouncedValue] = useDebounce(text,1000);
  useEffect(()=>{
    if(debouncedValue)setSearchTerm(debouncedValue)
  },[debouncedValue]);
  return (
      <div className='relative sm:ml-48 md:mx-40  sm:-mt-10 mt-3'>
        <input
        value={text}
        type='text'
        className='sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg'
        placeholder='Search Horizon or Type url'
        onChange={(event)=>setText(event.target.value)}
        onClick={()=>setHide(false)}
        />
        {text ? (
          <button type='button' className='absolute top-0.5 text-4xl text-gray-500 -ml-8 rotate-45' onClick={()=>setText('')}>
            +
          </button>
        ):null}
        {!hide ? <Links/> : null} 
      </div>
  )
}

export default Search;
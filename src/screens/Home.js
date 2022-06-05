
import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Card from '../components/Card'
import Search from '../components/Search'
import CardLoader from '../components/CardLoader'
import logo from '../assets/pokemon.png'
import { useGetAllPokemon } from '../hooks/useGetAllPokemon'


const Home = () => {

    
    const [search, setsearch] = useState('')
    const {datos, isLoading} = useGetAllPokemon()
  
   
  

  return (
    <div className='container'>
      <div className='flex justify-center my-4'>
        <img src={logo} className='w-96' alt="" />
      </div>
      <Search setsearch={setsearch}/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {
          isLoading ? (<CardLoader/>) : (<Card datos={datos} search={search}/>)
        }
      </div>
    </div>
  )
}

export default Home
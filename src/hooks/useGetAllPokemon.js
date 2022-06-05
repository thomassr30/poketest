
import { useState, useEffect } from "react"
import axios from "axios"


export const useGetAllPokemon = () => {

    const [datos, setdatos] = useState([])
    const [isLoading, setisLoading] = useState(true)

    const getPokemon = async () => {
        let pokemonArray = []
        for(let i=1;i<=151;i++){
          pokemonArray.push(await getData(i))
        }
        
        setdatos(pokemonArray)
        setisLoading(false)
      }
    
      const getData = async (id) => {
        const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        return data
      }
    
    
    
      useEffect(() => {
        getPokemon()
      },[])
  return {
    datos, isLoading
  }
}

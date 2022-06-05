import axios from "axios"
import { useState, useEffect } from "react"


export const useGetPokemon = (id) => {

    const [pokemon, setpokemon] = useState(null)

    useEffect(() => {
        const getPokemon = async () => {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            setpokemon(res.data)
        }
        getPokemon()
    }, [id])
    

  return {
    pokemon
  }
}

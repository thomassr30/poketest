import React from 'react'
import { Link } from 'react-router-dom'


const Card = ({datos, search}) => {

  const filterPoke = datos.filter((poke) => poke.data.name.toLowerCase().includes(search.toLowerCase()))
  
  const typeColors = {
    electric: '#FFEA70',
    normal: '#B09398',
    fire: '#FF675C',
    water: '#0596C7',
    ice: '#AFEAFD',
    rock: '#999799',
    flying: '#7AE7C7',
    grass: '#4A9681',
    psychic: '#FFC6D9',
    ghost: '#561D25',
    bug: '#A2FAA3',
    poison: '#795663',
    ground: '#D2B074',
    dragon: '#DA627D',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    default: '#2A1A1F',
};

  return (
    <>
            {
                filterPoke.map((item, index) => (
                    <div key={index} className="mx-auto mt-10 w-72 max-w-lg items-center justify-center overflow-hidden rounded-2xl bg-white shadow-xl">
                        <div className={`h-24 ${item.data.types[0].type.name}`}></div>
                        <div className="-mt-20 flex justify-center">
                        <img className="h-32 w-32" src={item.data.sprites.front_default} />
                        </div>
                        <h2 className="text-gray-700 text-2xl font-semibold text-center font-press">{item.data.name}</h2>
                        <div className="mb-5 flex justify-center">
                        <Link to={`/pokemon/${item.data.name}`} className=" bg-gradient-to-r from-green-200 to-green-400 mx-auto mt-7 py-3 px-14 text-center rounded-full text-white font-semibold cursor-pointer transform hover:-translate-y-1 hover:scale-100">Ver Más</Link>
                        </div>
                    </div>
                ))
            }
      </>
  )
}

export default Card
import React from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { useGetPokemon } from "../hooks/useGetPokemon"
import {IoMdArrowRoundBack} from 'react-icons/io'

const Pokemon = () => {

    const {id} = useParams()
    const navigate = useNavigate()

    const {pokemon} = useGetPokemon(id)

    const handleReturn = () => {
        navigate(-1)
    }
    

  return (
    <>
    {
        pokemon && (
            <div className="container bg-white mt-16 rounded-xl">
                <div className={`${pokemon.types[0].type.name} rounded-xl shadow-xl mx-4 sm:mx-4 md:mx-0 lg:mx-0`}>
                        <p 
                            onClick={handleReturn}
                            className="p-4 cursor-pointer font-extrabold"
                        ><IoMdArrowRoundBack fontSize={25} /></p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">

                    <div className='col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-2 flex justify-center'>
                        <img src={pokemon.sprites.other.dream_world.front_default} className="w-56 h-56" alt="" />
                     </div>

                    <div className={`col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-2 ${pokemon.types[0].type.name} shadow-2xl rounded-2xl mx-4`}>
                        <ul className="mt-5 py-8">
                            <li className="font-press text-xs ml-2">Id: <span className='text-gray-600'>#{pokemon.id}</span></li>
                            <li className="font-press text-xs mt-2 ml-2">Nombre: <span className='text-gray-600'>#{pokemon.name}</span></li>
                            <li className="font-press text-xs mt-2 ml-2">
                                Tipo: {pokemon.types.map((item, index) => (<span key={index} className="bg-gray-300 py-1 px-2 rounded-full">{item.type.name}{' '}</span>))}
                            </li>
                            <li className="font-press text-xs mt-2 ml-2 mb-3">
                                Habilidad: {pokemon.abilities.map((item, index) => (<span key={index} className="bg-gray-300 py-1 px-2 rounded-full">{item.ability.name}{' '}</span>))}
                            </li>
                        </ul>
                    </div>
                    <div className='bg-slate-600 col-span-4 mt-5 mb-10 mx-4 rounded-2xl text-white shadow-2xl'>
                        <div className="grid grid-cols-4">

                            <div className="flex justify-center col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1">
                                <p className="m-auto font-press text-xs">HP:</p>
                            </div>

                            <div className="col-span-2 sm:col-span-3 md:col-span-3 lg:col-span-3">
                            <div className="relative pt-1 mx-4 my-3">
                                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
                                    <div style={{ width: `${pokemon.stats[0].base_stat}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap justify-center bg-red-400"></div>
                                </div>
                            </div>
                            </div>

                            <div className="flex justify-center col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1">
                                <p className="m-auto font-press text-xs">Ataque:</p>
                            </div>

                            <div className="col-span-2 sm:col-span-3 md:col-span-3 lg:col-span-3">
                            <div className="relative pt-1 mx-4 my-3">
                                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
                                    <div style={{ width: `${pokemon.stats[1].base_stat}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap justify-center bg-orange-400"></div>
                                </div>
                            </div>
                            </div>

                            <div className="flex justify-center col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1">
                                <p className="m-auto font-press text-xs">Defensa:</p>
                            </div>

                            <div className="col-span-2 sm:col-span-3 md:col-span-3 lg:col-span-3">
                            <div className="relative pt-1 mx-4 my-3">
                                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
                                    <div style={{ width: `${pokemon.stats[2].base_stat}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap justify-center bg-blue-600"></div>
                                </div>
                            </div>
                            </div>

                            <div className="flex justify-center col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1">
                                <p className="m-auto font-press text-xs">A. especial:</p>
                            </div>

                            <div className="col-span-2 sm:col-span-3 md:col-span-3 lg:col-span-3">
                            <div className="relative pt-1 mx-4 my-3">
                                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
                                    <div style={{ width: `${pokemon.stats[3].base_stat}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap justify-center bg-red-400"></div>
                                </div>
                            </div>
                            </div>

                            <div className="flex justify-center col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1">
                                <p className="m-auto font-press text-xs">D. especial:</p>
                            </div>  

                            <div className="col-span-2 sm:col-span-3 md:col-span-3 lg:col-span-3">
                            <div className="relative pt-1 mx-4 my-3">
                                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
                                    <div style={{ width: `${pokemon.stats[4].base_stat}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap justify-center bg-pink-600"></div>
                                </div>
                            </div>
                            </div>

                            <div className="flex justify-center col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1">
                                <p className="m-auto font-press text-xs">Velocidad:</p>
                            </div>

                            <div className="col-span-2 sm:col-span-3 md:col-span-3 lg:col-span-3">
                            <div className="relative pt-1 mx-4 my-3">
                                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
                                    <div style={{ width: `${pokemon.stats[5].base_stat}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap justify-center bg-green-400"></div>
                                </div>
                            </div>
                            </div>

                            

                        </div>
                    </div>
                </div>
            </div>
        ) 
    }
</>
  )
}

export default Pokemon
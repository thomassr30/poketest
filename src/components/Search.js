import React from 'react'

const Search = ({setsearch}) => {
  return (
    <div className='bg-white p-5 mx-4 rounded-2xl shadow-xl'>
        <div className="bg-gray-200 md:mx-28 p-2 rounded-lg">
            <input 
                type="text" 
                className='w-full placeholder:text-gray-700 bg-gray-200 outline-none font-press text-xs' 
                placeholder='Buscar...'
                onChange={e => setsearch(e.target.value)}
                />
        </div>
    </div>
  )
}

export default Search
import React from 'react'

const CardLoader = () => {

    const arr = [1,2,3,4,5,6]

  return (
    <>
        {
            arr.map((item, index) => (
                <div key={index} className="mx-auto mt-10 w-72 p-4 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-xl">
                    <div className="animate-pulse">
                    <div className="rounded-full bg-slate-700 h-24 w-24 mx-auto"></div>
                        <div className="grid grid-cols-3">
                            <div className="h-5 bg-slate-700 rounded col-span-3 my-3"></div>
                            <div className="h-5 bg-slate-700 rounded col-start-2 my-3"></div>
                        </div>
                    </div>
                </div>
            ))
        }
    </>
  )
}

export default CardLoader
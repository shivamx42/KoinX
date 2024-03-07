import React from 'react'

export default function SentimentProps({src,textProp1,textProp2,color}) {
  return (
    <>
        <div className={`flex ${color} rounded-lg my-3`}>

        <img src={src} alt="" className='w-1/3 h-1/4 p-2'  />

        <div className=' rounded-lg p-2 my  -2'>
            <h1 className='font-semibold'>{textProp1}</h1>
            <h2>{textProp2}</h2>
        </div>
        </div>
    </>
  )
}

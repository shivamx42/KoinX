import React from 'react'

export default function AboutProps({src,textProp,color}) {
  return (
    <>
        <div className={`flex bg-${color} p-3 rounded-lg m-3 w-full flex-wrap`}>
                <img src={src} alt="" className='md:w-1/3 md:h-1/3 m-3 rounded-2xl sm:w-1/4'/>

                <div className='flex flex-col '>
                    <h1 className='text-white font-semibold md:text-lg mt-8'>{textProp}</h1>
                    <div className='bg-white p-1 rounded-lg w-3/4 ml-5 mt-8 font-semibold'>
                      Check Now &#10132;
                    </div>
                </div>
        </div>
        
    </>
  )
}

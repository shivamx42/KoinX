import React from 'react'

export default function TeamProps({src,name,desc}) {
  return (
    <>
        <div className='bg-blue-100 md:flex p-2 my-3 rounded-md items-center'>
            <div className='flex flex-col items-center md:items-start'>
                <img src={src} alt="" className='rounded-md ' />
                <p className='font-semibold'>{name}</p>
                <p className='text-sm text-gray-400'>Designation here</p>
            </div>

            <div>
                <h1 className='m-2 ml-6'>{desc}</h1>
            </div>
        </div>
    </>
  )
}

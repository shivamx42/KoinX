import React from 'react'

export default function GettingStarted() {
  return (
    <>
        <div className='flex flex-col p-1 m-4  bg-blue-700 text-white text-xs rounded-xl text-center w-90P md:w-3/4 '>
            <h4 className='font-bold items-center mx-auto mt-6'>Get Started with KoinX <br/>
                <span>for FREE</span>
            </h4>

            <span className="mx-6">
                With our range of features that you can equip for
                free, KoinX allows you to be more educated and
                aware of your tax reports.
            </span>

            <img src="images/started.png" alt="" className='w-1/2 h-1/3 items-center mx-auto mt-4'/>

            <div className='bg-white p-4 my-8 rounded-md w-3/4 items-center mx-auto'>
                <span className='text-black font-bold'>Get Started For FREE &rarr;</span>
            </div>

        </div>


    </>
  )
}

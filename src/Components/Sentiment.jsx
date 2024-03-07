import React from 'react'

export default function Sentiment() {
  return (
    <>
        <div className=' bg-white rounded-lg m-10 w-90p p-4'>
            <h1 className='font-bold text-lg mb-2'>Sentiment</h1>
            <h1 className='text-gray-400 mb-2'>Key Events &#9432;</h1>

            <div className='md:flex gap-4'> 

                <div className='flex bg-blue-100 rounded-lg my-3'>

                    <img src="/images/sentiment1.png" alt="" className='w-1/3 h-1/4 p-2'  />

                    <div className=' rounded-lg p-3 mb-4'>
                        <h1 className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quia?</h1>
                        <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis praesentium quidem quasi voluptatem sit a repellendus quaerat. Obcaecati quibusdam voluptatum quas repellendus dignissimos veniam, doloremque rerum earum atque delectus asperiores?</h2>
                    </div>
                </div>

                <div className='flex bg-green-100 rounded-lg my-3'>

                <img src="/images/sentiment2.png" alt=""  className='w-1/3 h-1/4 p-2'/>


                    <div className='p-3 mb-4 '>
                        <h1 className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quia?</h1>
                        <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis praesentium quidem quasi voluptatem sit a repellendus quaerat. Obcaecati quibusdam voluptatum quas repellendus dignissimos veniam, doloremque rerum earum atque delectus asperiores?</h2>
                    </div>
                </div>
                

            </div>

            <h1 className='text-gray-400 mb-2'>Analyst Estimates &#9432;</h1>

            <div className='flex gap-4'>

                <h1 className='bg-green-100 p-8 rounded-full text-green-600 font-bold'>76%</h1>
                <div className='w-full'>
                    <div className='flex'>
                        <h1>Buy</h1>
                        <hr className='border-green-600 border-t-4 rounded-md mt-3 mx-8 w-1/2'/>
                        <h1>76%</h1>
                    </div>

                    <div className='flex'>
                        <h1>Hold</h1>
                        <hr className='border-gray-400 border-t-4 rounded-md mt-3 mx-6 w-1/6'/>
                        <h1>8%</h1>
                    </div>

                    <div className='flex'>
                        <h1>Sell</h1>
                        <hr className='border-red-600 border-t-4 rounded-md mt-3 mx-8 w-1/3'/>
                        <h1>16%</h1>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

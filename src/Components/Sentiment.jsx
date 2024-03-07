import React from 'react'
import SentimentProps from './SentimentProps'

export default function Sentiment() {
  return (
    <>
        <div className=' bg-white rounded-lg m-10 w-90p p-4'>
            <h1 className='font-bold text-lg mb-2'>Sentiment</h1>
            <h1 className='text-gray-400 mb-2'>Key Events &#9432;</h1>

            <div className='md:flex gap-4'> 

            

                <SentimentProps 
                    src="/images/sentiment1.png" textProp1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quia?" textProp2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quia?
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis praesentium quidem quasi voluptatem sit a repellendus quaerat. Obcaecati quibusdam voluptatum quas repellendus dignissimos veniam, doloremque rerum earum atque delectus asperiores?" color="bg-blue-100"

                />

            
            
                <SentimentProps 
                    src="/images/sentiment2.png" textProp1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quia?" textProp2="Lorem ipsum dolor sit amet      consectetur adipisicing elit. Debitis, quia?
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis praesentium quidem quasi voluptatem sit a repellendus quaerat. Obcaecati quibusdam voluptatum quas repellendus dignissimos veniam, doloremque rerum earum atque delectus asperiores?" color="bg-green-100"

                />

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

import React from 'react'
import TrendingAPI from '../API Data/TrendingAPI'

export default function TrendingCoin({ind}) {

    const data=TrendingAPI();

    if (!data) {
        return <div>Some error occured</div>;
    }

  return (
    <>
        <div className='border-2 border-gray-200 rounded-md pr-8 pt-1 pl-2 pb-2 w-min flex flex-col flex-wrap ml-10 mt-4'>
          <div className='flex items-center'>

            <img src={data[ind].thumb} alt={data[ind].symbol} className='m-2 w-1/3 h-1/3' />
            <p>{data[ind].symbol}</p>
            <span className={`mr-6 p-1 text-xs ${data[ind].priceChangePercentage >= 0 ? 'text-green-500 bg-green-100' : 'text-red-500 bg-red-100'} m-2`}>
              {data[ind].priceChangePercentage.toString().substring(0,4)}%
            </span>
          </div>

          <p className='font-semibold text-lg mb-3'>{data[ind].price}</p>
          <img src={data[ind].sparkline} alt="" />

          

        </div>
    </>
  )
}

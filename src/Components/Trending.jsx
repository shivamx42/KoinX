import React, { useState, useEffect } from 'react';
import TrendingAPI from '../API Data/TrendingAPI';

export default function Trending() {

  const data=TrendingAPI();
  
  if (!data) {
    return <div>Some error occured</div>;
  }

  return (
    <>
      <div className='bg-white p-4 m-4 font-semibold rounded-lg w-90P md:w-3/4'>
        <span className='text-lg font-semibold'>Trending Coins(24h)</span>
        {data && data.slice(0,3).map((coin, index) => (
          <div key={index} className="flex items-center justify-between mt-2">
            <div className="flex items-center flex-wrap">
              <img src={coin.thumb} alt={coin.name} className="w-8 h-8 mr-2" />
              <span className="text-sm">{coin.name}</span>
            </div>
            <span className={`p-2 text-sm ${coin.priceChangePercentage >= 0 ? 'text-green-500 bg-green-100' : 'text-red-500 bg-red-100'}`}>
              {coin.priceChangePercentage.toString().substring(0,4)}%
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

import React, { useState, useEffect } from 'react';

export default function Trending() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/search/trending?x_cg_demo_api_key=CG-TWzfh2AUSuKqfPoVoiZXyifV`)
      .then((res) => res.json())
      .then((data) => {
        const trendingCoins = data.coins.slice(0, 3).map((coin) => ({
          name: coin.item.name,
          thumb: coin.item.thumb,
          priceChangePercentage: coin.item.data.price_change_percentage_24h.usd,
        }));
        setApiData(trendingCoins);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);


  if (!apiData) {
    return <div>Some error occured</div>;
  }

  return (
    <>
      <div className='bg-white p-4 m-8 w-3/4 font-semibold rounded-lg'>
        <span className='text-sm font-semibold'>Trending Coins(24h)</span>
        {apiData && apiData.map((coin, index) => (
          <div key={index} className="flex items-center justify-between mt-2">
            <div className="flex items-center">
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

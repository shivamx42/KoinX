import React, { useState, useEffect } from 'react';

export default function TrendingAPI() {

    const [apiData, setApiData] = useState(null);

    useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/search/trending?x_cg_demo_api_key=CG-TWzfh2AUSuKqfPoVoiZXyifV`)
        .then((res) => res.json())
        .then((data) => {
        const trendingCoins = data.coins.slice(0, 10).map((coin) => ({
            name: coin.item.name,
            thumb: coin.item.thumb,
            priceChangePercentage: coin.item.data.price_change_percentage_24h.usd,
            price: coin.item.data.price,
            sparkline: coin.item.data.sparkline,
            symbol: coin.item.symbol,
        }));
        setApiData(trendingCoins);
        })
        .catch((error) => console.error('Error fetching data:', error));
    }, []);

  return apiData;
    
  
}

    




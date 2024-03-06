import React, { useState, useEffect } from 'react';
import TradingView from './TradingView';

export default function Crypto() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,inr&include_24hr_change=true&x_cg_demo_api_key=CG-TWzfh2AUSuKqfPoVoiZXyifV`)
      .then((res) => res.json())
      .then((data) => setApiData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (!apiData) {
    return <div>Some error occured</div>;
  }

  const bitcoin = apiData.bitcoin;

  if (!bitcoin) {
    return <div>Some error occured</div>;
  }

  const { usd, inr, usd_24h_change } = bitcoin;
  const percent = (Math.abs(usd_24h_change) / usd)*100;

  return (

    <>
      <div className=' bg-white rounded-lg m-8 mt-2 w-full h-full md:w-3/5'>
 
        <div className='flex items-center gap-2 mb-3'>
          <img src="images/btc.png" alt="" /> <span className='font-bold'>Bitcoin</span>  <span className='text-symbol-bg'>BTC</span>
        </div>

        <div className='flex gap-2'>
          <span className='font-bold'>${usd.toLocaleString("en-US")}</span>
          <span className={`text-sm p-1 ${usd_24h_change < 0 ? 'bg-red-500' : 'bg-green-200'}`}>
            {percent.toString().substring(0,6)}%
          </span>

          <span className='text-gray-400 text-xs'>(24H)</span>
        </div>

        <div className='mb-3'>
          <span className='text-xs'>{'\u20B9'}{inr.toLocaleString("en-IN")} </span>
        </div>

        <hr />
        
        <div className='mt-3 mb-4 md:flex items-center justify-between'>
          <span className='font-bold'>Bitcon Price Chart(USD)</span>

          <div className='flex gap-2 text-sm text-symbol-bg'>
            <span>1h</span>
            <span>24h</span>
            <span className='text-blue-700 font-semibold'>7D</span>
            <span>1M</span>
            <span>3M</span>
            <span>6M</span>
            <span>1Y</span>
            <span>ALL</span>
          </div>
          
        </div>

        
        <div >
          <TradingView/>
        </div>
        
      </div>
      
    </>
  );
}

import React from 'react';
import TrendingCoin from './TrendingCoin'; 

export default function TrendingFooter() {
    const renderTrendingCoins=() => {
        const trendingCoins=[];
        for (let i=0;i<10;i++) {
            trendingCoins.push(<TrendingCoin key={i} ind={i} />);
        }
        return trendingCoins;
    };

    return (

        <>

            <p className='m-10 mb-0 font-bold'>You May Also Like</p>

            <div className='flex overflow-y-scroll no-scrollbar'>
                {renderTrendingCoins()}
            </div>

            <p className='m-10 mb-0 font-bold'>Trending Coins</p>

            <div className='flex overflow-y-scroll no-scrollbar mb-10'>
                {renderTrendingCoins()}
            </div>
        </>

        
    );
};



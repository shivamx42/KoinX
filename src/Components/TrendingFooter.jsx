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
        <div className='flex'>
            {renderTrendingCoins()}
        </div>
    );
};



import * as React from 'react';

function WinningBanner({ cardsArray }) {
    return (
        (cardsArray?.filter((item) => { return !item.isMatched }).length === 0) ? ( 
            <div className="winning"> 
            Congratulations!
            </div> 
         ) : null
    )
}

export default WinningBanner;
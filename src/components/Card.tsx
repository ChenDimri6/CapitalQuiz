import * as React from 'react';

function Card({ item, handleSelectedCards, isFirstCard, isDisabled }) { 
    const { name, isWrong, isMatched } = item;
    
    if (isMatched) { 
        return null
    }
    
    return ( 
        <div > 
            <button
                disabled={isDisabled}
                className={isFirstCard ? "first-card card" : isWrong ? "wrong-card card" : "card"}
                onClick={() => handleSelectedCards(item)} 
            >
            {name} 
            </button>
        </div> 
    ); 
} 
  
export default Card; 
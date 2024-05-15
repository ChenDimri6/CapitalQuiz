import * as React from 'react';
import Card from './Card';

function CardsBoard({ cardsArray, handleSelectedCards, firstCard, toDisable }) {
    return (
        <div className="board"> 
        { cardsArray?.map((item) => (
            <Card 
                item={item} 
                key={item.id} 
                handleSelectedCards={handleSelectedCards} 
                isFirstCard={item === firstCard} 
                isDisabled={toDisable} 
            /> ))}
        </div>
    )
}

export default CardsBoard;
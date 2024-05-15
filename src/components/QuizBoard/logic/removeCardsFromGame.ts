function removeCardsFromGame(prevArray, firstCard, secondCard) { 
    return prevArray.map((item) => { 
        if (item.id === firstCard?.id || item.id === secondCard?.id) { 
            return { ...item, isMatched: true }; 
        } else { 
            return item; 
        } 
    }); 
}

export default removeCardsFromGame;
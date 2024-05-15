function changeIsWrongForSelectedCards(arr, toValue, firstCard, secondCard){
    return arr.map((item) => { 
        if (item.id === firstCard?.id || item.id === secondCard?.id) { 
            return { ...item, isWrong: toValue }; 
        } else { 
            return item; 
        } 
    }); 
}

export default changeIsWrongForSelectedCards;
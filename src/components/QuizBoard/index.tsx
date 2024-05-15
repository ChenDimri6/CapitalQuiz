import React, { useState, useEffect } from "react";
import removeCardsFromGame from './logic/removeCardsFromGame';
import changeIsWrongForSelectedCards from "./logic/changeIsWrongForSelectedCards";
import Header from "../Header";
import WinningBanner from "../WinningBanner";
import ICard from "../../interfaces/CardInterface";
import getCountriesList from "../../server/getCountriesList/getCountriesListLogic";
import CardsBoard from "../CardsBoard";

function QuizBoard() {
    let [cardsArray, setCardsArray] = useState<ICard[] | null>();
    let [firstCard, setFirstCard] = useState<ICard | null>();
    let [secondCard, setSecondCard] = useState<ICard | null>();
    let [toDisable, setToDisable] = useState<boolean>();

    //Handling selecting a card
    const handleSelectedCards = async (card) => {
        firstCard && card.id !== firstCard?.id ?
            setSecondCard(card) :  
            setFirstCard(card);
    };

    //Clear the chosen cards
    const removeSelection = () => { 
        setFirstCard(null); 
        setSecondCard(null); 
    }

    //Setting a new game
    useEffect(() => { 
        setTimeout(async () => { 
            const cardsData = await getCountriesList();
            setCardsArray(cardsData); 
            setFirstCard(null); 
            setSecondCard(null); 
            setToDisable(false);
        }, 10); 
    }, []);

    //Chekcing if theres a match between the chosen cards
    useEffect(() => { 
        if (firstCard && secondCard) { 
            //If theres a match we remove the cards from the game by hiding them (in order to not delete data)
            if (firstCard.country === secondCard.country) { 
                setCardsArray(removeCardsFromGame(cardsArray, firstCard, secondCard)); 
                removeSelection(); 
            
            //Otherwise marking wrong match for styling and disabling choosing cards for 3 seconds
            } else { 
                setCardsArray(changeIsWrongForSelectedCards(cardsArray, true, firstCard, secondCard))
                setToDisable(true);
                
                setTimeout(() => {
                    setToDisable(false);
                    setCardsArray(changeIsWrongForSelectedCards(cardsArray, false, firstCard, secondCard))
                    removeSelection(); 
                }, 3000); 
            } 
        } 
    }, [firstCard, secondCard]); 

    return (
        <div className="container"> 
            <Header/>
            <CardsBoard
                cardsArray={cardsArray}
                handleSelectedCards={handleSelectedCards} 
                firstCard={firstCard} 
                toDisable={toDisable} />
            <WinningBanner cardsArray={cardsArray}/>
        </div> 
      ); 
}

export default QuizBoard;
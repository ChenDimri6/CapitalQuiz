import ICard from "../../interfaces/CardInterface";
import getCountriesListDb from "./getCountriesListDb";

const NUM_OF_COUNTRIES_IN_QUIZ = 5;

async function getCountriesListLogic() {
    const countries = await getCountriesListDb();

    //Choose NUM_OF_COUNTRIES_IN_QUIZ randomly
    const selectedCountries = countries.sort(() => 0.5 - Math.random()).slice(0, NUM_OF_COUNTRIES_IN_QUIZ);
    let countriesForGame: ICard[] = [];
    let counterForId = 0;

    //For each of the selected countries, create a card for its capital and add additional data
    for (const country of selectedCountries) {
        country.country = country.name.common;
        country.capital = country.capital[0];
        country.name = country.country;
        country.isMatched = false;
        country.isWrong = false;
        country.id = counterForId;

        const capital = { name: country.capital, country: country.country, id: counterForId+1, isMatched: false, 
            isWrong: false, capital: country.capital };

        countriesForGame.push(capital);
        countriesForGame.push(country);
        counterForId += 2;
    }

    return countriesForGame;
}

export default getCountriesListLogic;


async function getCountriesListDb() {
    try {
        const request = await fetch('https://restcountries.com/v3.1/all?fields=name,capital');
        const data = await request.json();
        return data;
    } catch(err){
        console.log(err.message);
        return [];
    }
}


export default getCountriesListDb;
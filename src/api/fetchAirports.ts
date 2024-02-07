export const getAirportsByCountryCode = async (code: string) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_AIRPORTS_API_URL}country=${code}`, {
            headers: {
                "X-Api-key": import.meta.env.VITE_AIRPORTS_API_KEY
            }
        })
        return res.json();
    } catch (error) {
        console.log("Error occured while fetching data from Airports API: ", error);
    }
}
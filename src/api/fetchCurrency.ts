
export const getCurrency = async () => {
    try {
        const res = await fetch(`${import.meta.env.VITE_CURRENCY_API_URL}?access_key=${import.meta.env.VITE_CURRENCY_API_KEY}`);
        return res.json();
    } catch (error) {
        console.log("Error occured while fetching data from currency API: ", error);
    }

}
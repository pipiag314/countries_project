export const getCountryByCode = async (code: string) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_COUNTRIES_API}alpha/${code}`);
        return res.json();
    } catch (error) {
        console.log("Error occured while fetching data from Single Country API: ", error)
    }
}

export const getCountryByFullName = async (fullName: string) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_COUNTRIES_API}name/${fullName}?fullText=true`);
        return res.json();
    } catch (error) {
        console.log("Error occured while getting data from Countries API by full name: ", error);
    }
}
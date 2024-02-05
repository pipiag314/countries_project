export const getReversGeocoding = async (lat: string | number, lng: string | number) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_GOOGLE_GEOCODING_API_URL}latlng=${lat},${lng}&result_type=country&key=${import.meta.env.VITE_GOOGLE_API_KEY}`);
        return await res.json();
    } catch (error) {
        console.log("Error occured while getting data from Geocoding API: ", error);
    }
}



// &location_type=ROOFTOP&result_type=country,political
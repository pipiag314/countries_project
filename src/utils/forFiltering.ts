import { CountriesType } from "../types/countryTypes";

export const filterCountries = (countries: CountriesType, ref: React.MutableRefObject<HTMLInputElement | null>) => {
    if(!ref) return;
    const lowerCasedInput = ref.current?.value.toLowerCase();
    if(lowerCasedInput === "") return countries;
    if(!lowerCasedInput) return;
    const filtered = countries.filter(country => country.name.common.toLowerCase().includes(lowerCasedInput));
    return filtered;
}
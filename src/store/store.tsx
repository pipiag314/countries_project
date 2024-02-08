import { create } from "zustand";
import { CountriesType } from "../types/countryTypes";

interface UseCountry {
  countries: CountriesType | [];
  filteredCountries: CountriesType | [];
  getCountries: () => Promise<void>;
  filterCountriesBySearch: (countries: CountriesType, userInput: string) => void;
}

export const useCountry = create<UseCountry>((set) => ({
  countries: [],
  filteredCountries: [],

  // fetching countries from an API and setting into states: 'countries' and 'filteredCountries'
  getCountries: async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_COUNTRIES_API}all`);
      const data = await res.json();
      set({ countries: data, filteredCountries: data });
    } catch (error) {
      console.log(
        `Error while fetching countries API from ${
          import.meta.env.VITE_COUNTRIES_API
        }`,
        error
      );
    }
  },


  // filtering countries based on userInputs and setting in state 'filteredCountries'
  // this function must be called every time when user change the input
  filterCountriesBySearch: (countries: CountriesType, userInput: string) => {
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(userInput.toLowerCase())
    );
    set({ filteredCountries: filtered });
  },
}));

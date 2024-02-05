
export interface CountryInterface {
    name: {
        common: string;
    };
    capital: string[];
    flags: {
        png: string;
    };
    cca2: string;
    coatOfArms: {
        png: string;
    };
    currencies: Record<string, string>;
    population: number;
    timezones: string[];
}


export type CountriesType = CountryInterface[];
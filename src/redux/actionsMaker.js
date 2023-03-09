import {
    ALLCOUNTRIESLOADED,
    COUNTRYBYRANDOM,
    COUNTRYBYREGION,
    COUNTRYBYNAME
} from "./actions"

export const allCountriesLoaded = (value) => {
    return {
        type: ALLCOUNTRIESLOADED,
        payload: value
    }
}

export const countryByRandom = (value) => {
    return {
        type: COUNTRYBYRANDOM,
        payload: value
    }
}

export const countryByRegion = (value) => {
    return {
        type: COUNTRYBYREGION,
        payload: value
    }
}

export const countryByName = (value) => {
    return {
        type: COUNTRYBYNAME,
        payload: value
    }
}
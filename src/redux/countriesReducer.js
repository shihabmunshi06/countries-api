import {
    ALLCOUNTRIESLOADED,
    COUNTRYBYRANDOM,
    COUNTRYBYREGION,
    COUNTRYBYNAME
} from "./actions"

let initialState = {
    allCountries: [],
    countryDatas: []
}

let countriesReducer = (state = initialState, action) => {
    switch (action.type) {

        case ALLCOUNTRIESLOADED:
            return {
                ...state,
                allCountries: action.payload
            }

        case COUNTRYBYRANDOM:

            let randomNumbers = action.payload
            let result = randomNumbers.map(each => {
                return state.allCountries[each]
            })

            return {
                ...state,
                countryDatas: result
            }

        case COUNTRYBYREGION:
            return {
                ...state,
                countryDatas: action.payload
            }

        case COUNTRYBYNAME:
            return {
                ...state,
                countryDatas: action.payload
            }

        default:
            return state
    }
}

export default countriesReducer
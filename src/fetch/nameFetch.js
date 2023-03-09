import axios from "axios";


import { countryByName } from "../redux/actionsMaker";


const searchFetch = (value) => {
    return async (dispatch) => {
        try {
            const response = await axios(`https://restcountries.com/v3.1/name/${value}`);
            dispatch(countryByName(response.data))
        } catch (error) {
            console.error(error);
        }
    }
}

export default searchFetch
import axios from "axios";

import { countryByRegion } from "../redux/actionsMaker";


const regionFetch = (region) => {

    return async (dispatch) => {

        try {
            const response = await axios(`https://restcountries.com/v3.1/region/${region}`);
            dispatch(countryByRegion(response.data))
        } catch (error) {
            console.error(error);
        }
    }
}

export default regionFetch
import axios from "axios";
import { allCountriesLoaded } from "../redux/actionsMaker";

const allCountriesFetch = async (dispatch) => {
    try {
        const response = await axios("https://restcountries.com/v3.1/all");
        dispatch(allCountriesLoaded(response.data))
    } catch (error) {
        console.error(error);
    }
}

export default allCountriesFetch
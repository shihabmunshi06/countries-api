import CountryButton from './borderCountryButton/CountryButton'
import { useGetBordersQuery } from '../../../app/features/apiSlice'

import "./border.scss"

export default function Border({ borderCodes }) {

    const { data, isLoading, isError } = useGetBordersQuery(borderCodes)

    if (isLoading) {
        return <h1>Data is Loading...</h1>
    }

    return (
        <div className="texts__bottom">
            <h3>Border Countries:</h3>
            <div className="countries-button-wrapper">
                {borderCodes && data.map((e, index) => <CountryButton key={index} countryName={e} countryCode={borderCodes[index]} />)}
            </div>
        </div>
    )
}

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        // baseUrl: "https://jsonplaceholder.typicode.com"
        baseUrl: "https://restcountries.com/v3.1/"
    }),
    endpoints: (builder) => ({
        getCountries: builder.query({
            query: () => "all",
            keepUnusedDataFor: 120
        }),
        getCountry: builder.query({
            query: (cca3) => `/alpha/${cca3}`
        }),
        getBorders: builder.query({
            //needs concurring fetch do later
            query: (param) => `/todo/${param}`
        }),
        getRegion: builder.query({
            query: (regionName) => `/region/${regionName}`
        }),
        getSearch: builder.query({
            query: (inputtedQuery) => `/name/${inputtedQuery}`
        }),
    })
})

export const {
    usegetCountriesquery,
    usegetCountryquery,
    usegetBordersquery,
    usegetRegionquery,
    usegetSearchquery, } = apiSlice
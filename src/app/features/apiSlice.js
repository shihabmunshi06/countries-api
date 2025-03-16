import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { addHistory } from "./navigationSlice";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://restcountries.com/v3.1"
    }),
    endpoints: (builder) => ({
        getCountries: builder.query({
            query: () => "/all",
        }),
        getCountry: builder.query({
            query: (cca3) => `/alpha/${cca3}`,
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    dispatch(addHistory(arg));
                } catch (error) {
                    throw error
                }
            },
        }),

        getBorders: builder.query({
            queryFn: async (borderCodes, _queryApi, _extraOptions, fetchWithBQ) => {
                try {
                    const fetchPromises = borderCodes.map((border) =>
                        fetchWithBQ(`/alpha/${border}`).then((response) => {
                            if (response.error) throw response.error;
                            return response.data[0].name.common;
                        })
                    );

                    const results = await Promise.all(fetchPromises);

                    return { data: results };
                } catch (error) {
                    return { error };
                }
            }
        }),
        getRegion: builder.query({
            query: (region) => `/region/${region}`
        }),
        getSearch: builder.query({
            query: (text) => `/name/${text}`
        }),
    })
})

export const {
    useGetCountriesQuery,
    useGetCountryQuery,
    useGetBordersQuery,
    useGetRegionQuery,
    useGetSearchQuery } = apiSlice
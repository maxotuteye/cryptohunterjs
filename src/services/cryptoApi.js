import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
    'x-rapidapi-host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
    'x-rapidapi-key': process.env.REACT_APP_CRYPTO_RAPIDAPI_KEY
}

const baseUrl = process.env.REACT_APP_CRYPTO_BASE_URL;

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi(
    {
        reducerPath: 'cryptoApi',
        baseQuery: fetchBaseQuery({baseUrl}),
        endpoints: (builder) => ({
            getCryptos: builder.query({
                query: (count) => createRequest(`/coins?limit=${count}`)
            }),
            getExchanges: builder.query({
                query: () => createRequest('/exchanges')
            }),
            getCryptoDetails: builder.query({
                query: (coinId) => createRequest(`/coin/${coinId}`)
            }),
            getCryptoHistory: builder.query({
                query: ({coinId, timePeriod}) => createRequest(`/coin/${coinId}/history/${timePeriod}`)
            })
        })
    }
)

export const {useGetCryptosQuery, useGetExchangesQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery} = cryptoApi;
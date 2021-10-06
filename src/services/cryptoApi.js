import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'db6850b878msha050d6f8bace95fp10c512jsn73cd41f1e451'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi(
    {
        reducerPath: 'cryptoApi',
        baseQuery: fetchBaseQuery({baseUrl}),
        endpoints: (builder) => ({
            getCryptos: builder.query({
                query: () => createRequest('/coins')
            })
        })
    }
)

export const {useGetCryptosQuery} = cryptoApi;
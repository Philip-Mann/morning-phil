import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const gNewsApi = createApi({
    reducerPath: 'fetchNews',
    baseQuery: fetchBaseQuery({ baseUrl: `https://gnews.io/api/v4/` }),
    endpoints: (builder) => ({
        getTopNewsForUsa: builder.query({
            // endpoint for top 5 headlines from usa
            query: () => {
                return `top-headlines?token=bc7eda8e775705989ea1db5afd42ec7f&country=us&max=5`
            },
        }),
    }),
});

export const { useGetTopNewsForUsaQuery } = gNewsApi;
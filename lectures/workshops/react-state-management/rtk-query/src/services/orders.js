import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

export const ordersApi = createApi({
	reducerPath: 'ordersApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'api' }),
	extractRehydrationInfo(action, { reducerPath }) {
		if (action.type === HYDRATE) {
			return action.payload[reducerPath];
		}
	},
	endpoints: (builder) => ({
		getOrders: builder.query({
			query: (page = 0) => `/orders?page=${page}`,

			// Only have one cache entry because the arg always maps to one string
			serializeQueryArgs: ({ endpointName }) => {
				return endpointName;
			},
			// Always merge incoming data to the cache entry
			merge: (currentCache, newItems) => {
				currentCache.push(...newItems);
			},
			// Refetch when the page arg changes
			forceRefetch({ currentArg, previousArg }) {
				return currentArg !== previousArg;
			},
		}),
	}),
});

export const { useLazyGetOrdersQuery } = ordersApi;
// export const { useGetOrdersQuery } = ordersApi;

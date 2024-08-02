import { configureStore } from '@reduxjs/toolkit';
import { ordersApi } from '@/services/orders';
import { createWrapper } from 'next-redux-wrapper';
import { HYDRATE } from 'next-redux-wrapper';
import selectedOrdersReducer from './slices/selectedOrders';

export const makeStore = () =>
	configureStore({
		reducer: {
			// Add the generated reducer as a specific top-level slice
			[ordersApi.reducerPath]: ordersApi.reducer,
			selectedOrders: selectedOrdersReducer,
		},
		// Adding the api middleware enables caching, invalidation, polling,
		// and other useful features of `rtk-query`.
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(ordersApi.middleware),
	});

export const wrapper = createWrapper(makeStore);

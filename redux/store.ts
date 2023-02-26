import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/query";
import { createWrapper } from "next-redux-wrapper";

import { mockApi } from "../services/mockApi";
import cartReducer from "./slices/cart";

const makeStore = () => {
	const store = configureStore({
		reducer: {
			cart: cartReducer,
			[mockApi.reducerPath]: mockApi.reducer,
		},
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mockApi.middleware),
	});

	return store;
};

// setupListeners(store.dispatch);

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: false });

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: {
		graphData: graphDataReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {},
		}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

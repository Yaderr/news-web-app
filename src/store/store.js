import { configureStore } from "@reduxjs/toolkit";
import { newsApi } from "./apis";
import { configSlice } from "./config";
import { authSlice } from "./auth";



export const store = configureStore({
    reducer: {
        config: configSlice.reducer,
        auth: authSlice.reducer,
        [newsApi.reducerPath]: newsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(newsApi.middleware)
})
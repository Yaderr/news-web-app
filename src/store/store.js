import { configureStore } from "@reduxjs/toolkit";
import { newsApi } from "./apis";
import { configSlice } from "./config";
import { authSlice } from "./auth";
import { bookmarksSlice } from "./bookmarks/bookmarksSlice";

export const store = configureStore({
    reducer: {
        config: configSlice.reducer,
        auth: authSlice.reducer,
        bookmarks: bookmarksSlice.reducer,
        [newsApi.reducerPath]: newsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(newsApi.middleware)
})
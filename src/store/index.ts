import { configureStore } from "@reduxjs/toolkit";
import api from "../services/api";
import userReducer from "./reducers/user"

export const store = configureStore({
    reducer: {
        user: userReducer,
        [api.reducerPath]: api.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
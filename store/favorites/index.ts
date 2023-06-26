import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {reducer as favoritesReducer} from './favorites.slice'


const reducers = combineReducers({
    favorites:favoritesReducer
})

export const store  = configureStore({
    reducer: {
        favorites: favoritesReducer,
    },
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>
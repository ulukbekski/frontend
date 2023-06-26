import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoriteItem {
  id: number;
  // Add other properties of the item
}

interface FavoritesState extends Array<FavoriteItem> {}

const initialState: FavoritesState = [];

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorites: (state, { payload }: PayloadAction<FavoriteItem>) => {
      const isExist = state.some((r) => r.id === payload.id);
      if (isExist) {
        const index = state.findIndex(item => item.id === payload.id)
        if(index !== -1){
            state.splice(index,1)
        }
      } else {
        state.push(payload);
      }
    },
  },
});

export const { actions, reducer } = favoritesSlice;


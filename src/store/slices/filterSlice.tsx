import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoryFilter, SortOption } from '../../types/types'


interface FilterState {
  category: CategoryFilter;
  sortOption: SortOption;
}

const initialState: FilterState = {
  category: 'all',
  sortOption: 'price-asc',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<CategoryFilter>) => {
      state.category = action.payload;
    },
    setSortOption: (state, action: PayloadAction<SortOption>) => {
      state.sortOption = action.payload;
    },
  },
});

export const { setCategory, setSortOption } = filterSlice.actions;
export default filterSlice.reducer;
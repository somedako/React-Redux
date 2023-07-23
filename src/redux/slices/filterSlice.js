import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    curentPage: 1,
};

export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCurrentPage(state, action) {
            state.curentPage = action.payload;
        },

        setFilters(state, action) {
            state.curentPage = Number(action.payload.curentPage);
        },
    },
});

export const { setCurrentPage, setFilters } = filterSlice.actions;

export default filterSlice.reducer;

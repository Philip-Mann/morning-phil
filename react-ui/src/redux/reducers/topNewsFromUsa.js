import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: {}
};

export const topNewsFromUsaSlice = createSlice({
    name: 'gNewsApi',
    initialState,
    reducers: {
        getTopNewsFromUsaData: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { getTopNewsFromUsaData } = topNewsFromUsaSlice.actions;

export const topNewsFromUsaData = (state) => state.gNewsApi;

export default topNewsFromUsaSlice.reducer;
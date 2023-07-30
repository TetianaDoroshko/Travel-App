import { createSlice } from '@reduxjs/toolkit';
import { getAllThunk } from './actions/trips/getAll';
import { getTripThunk } from './actions/trips/getTripById';

const initialState = {
    trips: [],
    trip: {},
    loading: false
};

const tripsSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
            // get all trips
            .addCase(getAllThunk.pending, (store, action) => {
                store.loading = true;
            })
            .addCase(getAllThunk.fulfilled, (store, { payload }) => {
                store.loading = false;
                store.trips = payload;
            })
            .addCase(getAllThunk.rejected, store => {
                store.loading = false;
            })
            // get trip by id
            .addCase(getTripThunk.pending, (store, action) => {
                store.loading = true;
                store.trip = {};
            })
            .addCase(getTripThunk.fulfilled, (store, { payload }) => {
                store.loading = false;
                store.trip = payload;
            })
            .addCase(getTripThunk.rejected, (store, { payload }) => {
                store.loading = false;
            });
    }
});
export const tripsReducer = tripsSlice.reducer;

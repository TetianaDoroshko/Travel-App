import { createSlice } from '@reduxjs/toolkit';
import { getBookingsThunk } from './actions/bookings/getBookings';
import { removeBookingThunk } from './actions/bookings/removeBooking';

const initialState = {
    bookings: [],
    loading: false
};

const bookingsSlice = createSlice({
    name: 'bookings',
    initialState,
    extraReducers: builder => {
        builder
            // get all bookings
            .addCase(getBookingsThunk.pending, (store, action) => {
                store.loading = true;
            })
            .addCase(getBookingsThunk.fulfilled, (store, { payload }) => {
                store.loading = false;
                store.bookings = payload;
            })
            .addCase(getBookingsThunk.rejected, store => {
                store.loading = false;
            })
            // remobe booking
            .addCase(removeBookingThunk.pending, store => {
                store.loading = true;
            })
            .addCase(removeBookingThunk.fulfilled, (store, { payload }) => {
                store.loading = false;
                store.bookings = store.bookings.filter(booking => booking.id !== payload);
            })
            .addCase(removeBookingThunk.rejected, store => {
                store.loading = false;
            });
    }
});
export const bookingsReducer = bookingsSlice.reducer;

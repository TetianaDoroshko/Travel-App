import { createAsyncThunk } from '@reduxjs/toolkit';
import { HttpMethod } from '../../../variables/httpMethods';
import { notify } from '../../../services/notyficationService';

export const removeBookingThunk = createAsyncThunk('bookings/remove', async (bookingId, { extra, rejectWithValue }) => {
    try {
        const data = await extra.httpService.fetchData(`/bookings/${bookingId}`, HttpMethod.DELETE);
        console.log(data);
        return bookingId;
    } catch (error) {
        notify.error(error.message);
        return rejectWithValue(error.message);
    }
});

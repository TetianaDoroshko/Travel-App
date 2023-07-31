import { createAsyncThunk } from '@reduxjs/toolkit';
import { HttpMethod } from '../../../variables/httpMethods';
import { notify } from '../../../services/notyficationService';
import { Message } from '../../../variables/messages';

export const removeBookingThunk = createAsyncThunk('bookings/remove', async (bookingId, { extra, rejectWithValue }) => {
    try {
        await extra.httpService.fetchData(`/bookings/${bookingId}`, HttpMethod.DELETE);
        notify.success(Message.REMOVE_BOOK_SUCCESS);
        return bookingId;
    } catch (error) {
        notify.error(error.message);
        return rejectWithValue(error.message);
    }
});

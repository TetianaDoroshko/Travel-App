import { createAsyncThunk } from '@reduxjs/toolkit';
import { HttpMethod } from '../../../variables/httpMethods';
import { notify } from '../../../services/notyficationService';
import { Message } from '../../../variables/messages';

export const addBookingThunk = createAsyncThunk('bookings/add', async (booking, { extra, rejectWithValue }) => {
    try {
        const data = await extra.httpService.fetchData(`/bookings`, HttpMethod.POST, booking);
        notify.success(Message.ADD_BOOK_SUCCESS);
        return data;
    } catch (error) {
        notify.error(error.message);
        return rejectWithValue(error.message);
    }
});

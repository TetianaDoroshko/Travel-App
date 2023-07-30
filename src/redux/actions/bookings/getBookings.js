import { createAsyncThunk } from '@reduxjs/toolkit';
import { HttpMethod } from '../../../variables/httpMethods';
import { notify } from '../../../services/notyficationService';

export const getBookingsThunk = createAsyncThunk('bookings/getAll', async (_, { extra, rejectWithValue }) => {
    try {
        const data = await extra.httpService.fetchData(`/bookings`, HttpMethod.GET);
        console.log(data);
        return data;
    } catch (error) {
        notify.error(error.message);
        return rejectWithValue(error.message);
    }
});

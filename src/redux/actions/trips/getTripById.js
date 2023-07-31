import { createAsyncThunk } from '@reduxjs/toolkit';
import { HttpMethod } from '../../../variables/httpMethods';
import { notify } from '../../../services/notyficationService';

export const getTripThunk = createAsyncThunk('trips/get-one', async (tripId, { extra, rejectWithValue }) => {
    try {
        const data = await extra.httpService.fetchData(`/trips/${tripId}`, HttpMethod.GET);
        return data;
    } catch (error) {
        notify.error(error.message);
        return rejectWithValue(error.message);
    }
});

import { createAsyncThunk } from '@reduxjs/toolkit';
import { HttpMethod } from '../../../variables/httpMethods';
import { notify } from '../../../services/notyficationService';
import { saveLocalStorage } from '../../../helpers/localStorage';

export const signInThunk = createAsyncThunk('auth/sign-in', async (user, { extra, rejectWithValue }) => {
    try {
        const data = await extra.httpService.fetchData('/auth/sign-in', HttpMethod.POST, user);
        console.log(data);
        extra.httpService.addToken(data.token);
        saveLocalStorage(data.token);
        return data;
    } catch (error) {
        notify.error(error.message);
        return rejectWithValue(error.message);
    }
});

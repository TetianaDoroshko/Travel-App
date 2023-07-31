import { createAsyncThunk } from '@reduxjs/toolkit';
import { HttpMethod } from '../../../variables/httpMethods';
import { notify } from '../../../services/notyficationService';
import { removeLocalStorage } from '../../../helpers/localStorage';

export const checkCurrentThunk = createAsyncThunk('auth/check-user', async (token, { extra, rejectWithValue }) => {
    try {
        extra.httpService.addToken(token);
        const data = await extra.httpService.fetchData('/auth/authenticated-user', HttpMethod.GET);
        return { user: data, token };
    } catch (error) {
        notify.error(error.message);
        removeLocalStorage();
        extra.httpService.removeToken();
        return rejectWithValue(error.message);
    }
});

import { createAsyncThunk } from '@reduxjs/toolkit';
import { notify } from '../../../services/notyficationService';
import { removeLocalStorage } from '../../../helpers/localStorage';

export const signOutThunk = createAsyncThunk('auth/sign-out', async (user, { extra, rejectWithValue }) => {
    try {
        extra.httpService.removeToken();
        removeLocalStorage();
    } catch (error) {
        notify.error(error.message);
    }
});

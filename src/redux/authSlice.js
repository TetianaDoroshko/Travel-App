import { createSlice } from '@reduxjs/toolkit';
import { signupThunk } from './actions/auth/sugnUp';

const initialState = {
    user: {
        fullName: '',
        email: ''
    },
    token: null,
    loading: false,
    // error: null,
    isLoggedIn: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(signupThunk.pending, (store, action) => {
                store.user = initialState.user;
                store.token = null;
                store.isLoggedIn = false;
                store.loading = true;
            })
            .addCase(signupThunk.fulfilled, (store, { payload }) => {
                store.loading = false;
                store.user = payload.user;
                store.token = payload.token;
                store.isLoggedIn = true;
            })
            .addCase(signupThunk.rejected, (store, { payload }) => {
                store.loading = false;
            });
    }

    // login
    // [loginThunk.pending]: store => {
    //     store.loading = true;
    //     store.error = null;
    // },
    // [loginThunk.fulfilled]: (store, action) => {
    //     store.loading = false;
    //     store.user = action.payload.user;
    //     store.token = action.payload.token;
    //     store.isLoggedIn = true;
    //     store.isVerify = true;
    // },
    // [loginThunk.rejected]: (store, action) => {
    //     store.loading = false;
    //     store.error = action.payload;
    // },
    // logout
    // [logoutThunk.pending]: store => {
    //     store.loading = true;
    //     store.error = null;
    // },
    // [logoutThunk.fulfilled]: store => {
    //     return initialState;
    // },
    // [logoutThunk.rejected]: (store, action) => {
    //     store.loading = false;
    //     store.error = action.payload;
    // },
    // refresh
    // [refreshThunk.pending]: store => {
    //     store.loading = true;
    //     store.error = null;
    // },
    // [refreshThunk.fulfilled]: (store, action) => {
    //     store.loading = false;
    //     store.user = action.payload;
    //     store.isLoggedIn = true;
    //     store.isVerify = true;
    // },
    // [refreshThunk.rejected]: (store, action) => {
    //     store.loading = false;
    //     store.error = action.payload;
    //     store.token = null;
    // }
});
export const authReducer = authSlice.reducer;

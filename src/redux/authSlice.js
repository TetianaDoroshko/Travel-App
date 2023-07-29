import { createSlice } from '@reduxjs/toolkit';
import { signUpThunk } from './actions/auth/signUp';
import { checkCurrentThunk } from './actions/auth/checkCurrent';
import { signInThunk } from './actions/auth/signIn';
import { signOutThunk } from './actions/auth/signOut';

const initialState = {
    user: {
        fullName: '',
        email: ''
    },
    token: null,
    loading: false,
    isLoggedIn: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
            // sign-up
            .addCase(signUpThunk.pending, (store, action) => {
                store.user = initialState.user;
                store.token = null;
                store.isLoggedIn = false;
                store.loading = true;
            })
            .addCase(signUpThunk.fulfilled, (store, { payload }) => {
                store.loading = false;
                store.user = payload.user;
                store.token = payload.token;
                store.isLoggedIn = true;
            })
            .addCase(signUpThunk.rejected, store => {
                store.loading = false;
            })
            // refresh token
            .addCase(checkCurrentThunk.pending, (store, action) => {
                // store.user = initialState.user;
                // store.isLoggedIn = false;
                store.loading = true;
            })
            .addCase(checkCurrentThunk.fulfilled, (store, { payload }) => {
                store.loading = false;
                store.user = payload.user;
                store.isLoggedIn = true;
                store.token = payload.token;
            })
            .addCase(checkCurrentThunk.rejected, store => {
                store.loading = false;
                store.user = initialState.user;
                store.isLoggedIn = false;
                store.token = null;
            })
            // sign-in
            .addCase(signInThunk.pending, store => {
                store.user = initialState.user;
                store.token = null;
                store.isLoggedIn = false;
                store.loading = true;
            })
            .addCase(signInThunk.fulfilled, (store, { payload }) => {
                store.loading = false;
                store.user = payload.user;
                store.token = payload.token;
                store.isLoggedIn = true;
            })
            .addCase(signInThunk.rejected, store => {
                store.loading = false;
            })
            // sign-out
            .addCase(signOutThunk.fulfilled, store => {
                // store.loading = false;
                store.user = initialState.user;
                store.token = null;
                store.isLoggedIn = false;
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

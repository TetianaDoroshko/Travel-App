import { configureStore } from '@reduxjs/toolkit';
import { httpService } from '../services/httpService';
import { authReducer } from './authSlice';

export const store = configureStore({
    reducer: {
        // trips: tripsReducer,
        // filter: filterReduser,
        auth: authReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    httpService
                }
            }
        })
});

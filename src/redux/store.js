import { configureStore } from '@reduxjs/toolkit';
import { httpService } from '../services/httpService';
import { authReducer } from './authSlice';
import { tripsReducer } from './tripsSlice';
import { bookingsReducer } from './bookingsSlice';

export const store = configureStore({
    reducer: {
        trips: tripsReducer,
        bookings: bookingsReducer,
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

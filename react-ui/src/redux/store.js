  import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { gNewsApi } from './services/gNewsApi'

export const store = configureStore({
    reducer: {
        [gNewsApi.reducerPath]: gNewsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(gNewsApi.middleware)
});

setupListeners(store.dispatch);
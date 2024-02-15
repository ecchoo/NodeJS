import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/User'
import basketReducer from './reducers/Basket'
import { productsAPI } from '@/api/products'
import { basketAPI } from '@/api/basket'

export const store = configureStore({
    reducer: {
        user: userReducer,
        basket: basketReducer,
        [productsAPI.reducerPath]: productsAPI.reducer,
        [basketAPI.reducerPath]: basketAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(productsAPI.middleware)
            .concat(basketAPI.middleware)
});

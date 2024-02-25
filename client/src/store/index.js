import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/User'
import basketReducer from './reducers/Basket'
import authModalReducer from './reducers/AuthModal'
import modalCreateProductReducer from './reducers/ModalCreateProduct'
import modalUpdateProductReducer from './reducers/ModalUpdateProduct'
import modalConfirmDeleteProductReducer from './reducers/ModalConfirmDeleteProduct'
import adminReducer from './reducers/Admin'
import { basketAPI, productsAPI, profileAPI, adminProductsAPI } from '@/api'

import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['user'],
}

const rootReducer = combineReducers({
    user: userReducer,
    basket: basketReducer,
    authModal: authModalReducer,
    modalCreateProduct: modalCreateProductReducer,
    modalUpdateProduct: modalUpdateProductReducer,
    modalConfirmDeleteProduct: modalConfirmDeleteProductReducer,
    admin: adminReducer,
    [productsAPI.reducerPath]: productsAPI.reducer,
    [basketAPI.reducerPath]: basketAPI.reducer,
    [profileAPI.reducerPath]: profileAPI.reducer,
    [adminProductsAPI.reducerPath]: adminProductsAPI.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(productsAPI.middleware).concat(basketAPI.middleware).concat(profileAPI.middleware).concat(adminProductsAPI.middleware)
});

export const persistor = persistStore(store)
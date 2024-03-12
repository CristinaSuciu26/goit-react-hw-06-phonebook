import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './slices/contactSlice';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
  persistStore,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedContacts = persistReducer(persistConfig, contactSlice.reducer);

const persistedReducer = combineReducers({
  contacts: persistedContacts,
});

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

import React from 'react';
import ReactDOM from 'react-dom/client';

import './style/config.css';

import App from './app';



//redux
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./reducers"
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';





const persistConfig = {
  key: 'root',
  storage: storage,
  
 };
 const pReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: pReducer, 
  devTools : true, // penser à passer en false une fois la phase d'intégration terminer
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['persist/PERSIST', 'persist/PURGE'], // Exclu les actions persist/PERSIST et persist/PURGE de la vérification de sérialisation
    },
  }),
});
export const persistor = persistStore(store);



//persistGate permet de retarder le rendu jusqu'a ce que les données soient récupéres du stockage

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>,
  
);

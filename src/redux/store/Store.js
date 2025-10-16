// import {
//   combineReducers,
//   configureStore,
// } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import usersSlices from '../slices/SessionUser';


// const rootReducer = combineReducers({
//   users: usersSlices,

//   // Add other reducers here
// });

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//       immutableCheck: { ignore: ['users', 'posts'] }, // Add your reducer name here
//     }),
//   // Add other middleware or enhancers if needed
// });

// export const persistor = persistStore(store);

// export default store;



import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import usersSlices from '../slices/SessionUser';

// 1 Combine all your reducers
const rootReducer = combineReducers({
  users: usersSlices,
  // Add other reducers here
});

// 2️ Configure Redux Persist
const persistConfig = {
  key: 'root',        // key for persisted state
  storage: AsyncStorage, // use AsyncStorage in React Native
  whitelist: ['users'],  // only persist users slice (optional)
};

// 3️ Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4️ Configure store
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // disable serializable check for redux-persist
      immutableCheck: { ignore: ['users'] }, // optional, ignore specific reducers
    }),
  devTools: process.env.NODE_ENV !== 'production', // enable Redux DevTools in dev only
});

// 5️ Create persistor
export const persistor = persistStore(store);

// 6️ Export store
export default store;

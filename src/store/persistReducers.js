import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'marchachef',
      storage,
      whitelist: ['user', 'user', 'cart'],
    },
    reducers
  );
  return persistedReducers;
};

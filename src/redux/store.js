import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

// import phonebookReducer from "./phonebook/phonebook-reducer";

// import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import contactsReducer from "../redux/phonebook/phonebook-reducer";

import authReducer from "../redux/auth/auth-reducer";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

// const rootReducer = combineReducers({
//     phonebok: phonebookReducer,

// })
// const middleware = [...getDefaultMiddleware(), logger];

// const store = configureStore({
//   reducer: phonebookReducer,

//   middleware,

//   devTools: process.env.NODE_ENV === "development",
// });

// export default store;
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // logger
];

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };

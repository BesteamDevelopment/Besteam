import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./root.reducer";
// @ts-ignore

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type AppDispatch = typeof store.dispatch;
// export let persistor = persistStore(store);
// export store;

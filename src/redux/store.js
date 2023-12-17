import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./reducer";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["news", "errors"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };

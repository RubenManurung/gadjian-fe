import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import personnelsReducers from "./personnels/reducers";
import storage from "redux-persist/lib/storage";

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "root",
  storage,
};

const rootReducers = combineReducers({
  personnels: personnelsReducers,
});
const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = createStore(
  persistedReducer,
  composerEnhancer(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export default store;
export { persistor };

// export default () => {
//   let store = createStore(
//     persistedReducer,
//     composerEnhancer(applyMiddleware(thunk))
//   );
//   let persistor = persistStore(store);
//   return { store, persistor };
// };

// export default store;

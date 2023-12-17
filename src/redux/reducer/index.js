import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// helpers
import news from "./news";
import errors from "./errors";

const newsPersistConfig = {
  key: "news",
  storage: storage,
  blacklist: ["popularNews"],
};

const reducer = combineReducers({
  news: persistReducer(newsPersistConfig, news),
  errors,
});

export default reducer;

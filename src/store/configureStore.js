import {createStore,combineReducers} from "redux";
import entriesReducer from "../reducers/entries.reducers";

const configureStore = () => {
  return createStore(
    combineReducers({
      entries: entriesReducer,
    })
  );
};

export default configureStore;
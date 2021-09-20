import {createStore,combineReducers} from "redux";
import entriesReducer from "../reducers/entries.reducers";
import modalsReducers from "../reducers/modals.reducers"
import { composeWithDevTools } from 'redux-devtools-extension'

const configureStore = () => {
  return createStore(
    combineReducers({
      entries: entriesReducer,
      modals: modalsReducers,
    }), composeWithDevTools()
  );
};

export default configureStore;
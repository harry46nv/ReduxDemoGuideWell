import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import CombinedReducer from "./Reducers";

const reduxGlobalStore = createStore(CombinedReducer, composeWithDevTools());

export default reduxGlobalStore;
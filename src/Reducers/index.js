import { combineReducers } from "redux";
import AddClaimReducer from "./AddClaimReducer";

const CombinedReducer = combineReducers({
  addClaim: AddClaimReducer
})

export default CombinedReducer;
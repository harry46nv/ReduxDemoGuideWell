import { combineReducers } from "redux";
import AddClaimReducer from "./AddClaimReducer";
import AddPolicyReducer from './AddPolicyReducer'

const CombinedReducer = combineReducers({
  addClaim: AddClaimReducer,
  addPolicy: AddPolicyReducer
})

export default CombinedReducer;

import {toast} from "react-toastify"
const initalState = 
  {
    claim:[]
  }
;

const AddClaimReducer = (state = initalState, action) => {
  const { type, payload } = action;
  switch(type){
    case "ADD CLAIM":
    toast("Claim Successfully Submitted")
    return Object.assign({}, state, { claim: state.claim.concat(payload) });
    default:
    return state
  }
  return state;
};

export default AddClaimReducer;
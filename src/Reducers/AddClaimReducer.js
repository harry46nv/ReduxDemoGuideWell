
import {toast} from "react-toastify"
const initalState = 
  {
    claims:[]
  }
;

const AddClaimReducer = (state = initalState, action) => {
  const { type, payload } = action;
  switch(type){
    case "FILE CLAIM":
    toast("Claim Successfully Submitted")
    return Object.assign({}, state, { claims: state.claims.concat(payload) });
    default:
    return state
  }
  return state;
};

export default AddClaimReducer;
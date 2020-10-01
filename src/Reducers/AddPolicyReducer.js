
import {toast} from "react-toastify"
const initalState = 
  {
    policies:[]
  }
;

const AddPolicyReducer = (state = initalState, action) => {
  const { type, payload } = action;
  switch(type){
    case "ADD POLICY":
    toast("Policy Successfully Submitted")
    return Object.assign({}, state, { policies: state.policies.concat(payload) });
    default:
    return state
  }
  return state;
};

export default AddPolicyReducer;
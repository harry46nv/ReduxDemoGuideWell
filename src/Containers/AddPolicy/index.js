import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import {useSelector, useDispatch} from 'react-redux'
import './styles.css'




 const AddPolicy = () => {
     const state = useSelector(state=> state)
     
     const dispatch = useDispatch()
 const [componentState, setComponentState] = React.useState({
    providerFirstName:"",
    providerLastName:"",
    ptan:"",
    npi:"",
    beneficiaryFirstName:"",
    beneficiaryLastName:"",
    beneficiaryPhoneNumber:"",
    providerPhoneNumber:""
 })

 const handleFieldChange = name => event => {
     
    setComponentState({...componentState, [name]:event.target.value})
 }

 const submitClaim = () => {
    
    dispatch({
        type:"ADD POLICY",
        payload: componentState
    })
    clearFields()
 }

 const clearFields = () => {
    setComponentState({...componentState,
      policyAmount:"",
      dateOfPolicy:"",
      description:"",
        beneficiaryFirstName:"",
        beneficiaryLastName:""
     })
}

  return (
    <form  noValidate autoComplete="off"   className="add_claim_form_core_style">
      <Grid className="add_claim_form_style">
        <Grid container>
        <Grid className="claim-details-heading-style">Beneficiary Details</Grid>
      <Grid className="add_claim_form_row_style">
        <TextField
          id="beneficiary First Name"
          label="Beneficiary First Name"
         value={componentState.beneficiaryFirstName}
         onChange={handleFieldChange("beneficiaryFirstName")}
        />
        <TextField
          id="beneficiary Last Name"
          label="Beneficiary Last Name"
         value={componentState.beneficiaryLastName}
         onChange={handleFieldChange("beneficiaryLastName")}
        />
       
         <TextField
          id="policyAmount"
          label="Policy amount"
         value={componentState.policyAmount}
         onChange={handleFieldChange("policyAmount")}
        />
        </Grid>
        <Grid className="add_claim_form_row_style">
           <TextField
          id="dateOfPolicy"
          label="Date of policy"
         value={componentState.dateOfPolicy}
         onChange={handleFieldChange("dateOfPolicy")}
        />
           <TextField
          id="description"
          label="Description"
         value={componentState.description}
         onChange={handleFieldChange("description")}
        />
        </Grid>
      </Grid>
      <Grid container className="form-buttons-container-style">
      <Grid item onClick={clearFields} className="form-buttons-style clear-Button-style">CLEAR</Grid>
      <Grid item onClick={submitClaim} className="form-buttons-style submit-Button-style">ADD POLICY</Grid>
      </Grid>
      </Grid>
     
    </form>
  );
}

export default AddPolicy

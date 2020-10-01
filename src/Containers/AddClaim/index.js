import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import {useSelector, useDispatch} from 'react-redux'
import './styles.css'




 const AddClaim = () => {
     const state = useSelector(state=> state)
     console.log(state)
     const dispatch = useDispatch()
 const [componentState, setComponentState] = React.useState({
    providerFirstName:"",
    providerLastName:"",
    ptan:"",
    npi:"",
    beneficiaryFirstName:"",
    beneficiaryLastName:"",
    beneficiaryPhoneNumber:""
 })

 const handleFieldChange = name => event => {
     
    setComponentState({...componentState, [name]:event.target.value})
 }

 const submitClaim = () => {
    
    dispatch({
        type:"ADD CLAIM",
        payload: componentState
    })
    clearFields()
 }

 const clearFields = () => {
    setComponentState({...componentState,
        providerFirstName:"",
        providerLastName:"",
        ptan:"",
        npi:"",
        beneficiaryFirstName:"",
        beneficiaryLastName:"",
        beneficiaryPhoneNumber:""
     })
}

  return (
    <form  noValidate autoComplete="off"   className="add_claim_form_core_style">
      <Grid className="add_claim_form_style">
      <Grid container>
            <Grid className="claim-details-heading-style"> Provider Details</Grid>
      <Grid className="add_claim_form_row_style">
        <TextField
          id="provider First Name"
          label="Provider First Name"
         value={componentState.providerFirstName}
         onChange={e=>handleFieldChange("providerFirstName")}
        />
        <TextField
          id="provider Last Name"
          label="Provider Last Name"
         value={componentState.providerLastName}
         onChange={e=>handleFieldChange("providerLastName")}
        />
          <TextField
          id="ptan"
          label="PTAN"
         value={componentState.ptan}
         onChange={e=>handleFieldChange("ptan")}
        />  
        <TextField
        id="npi"
        label="NPI"
       value={componentState.npi}
       onChange={e=>handleFieldChange("npi")}
      />
         <TextField
          id="provider Phone number"
          label="Provider Phone #"
         value={componentState.providerPhoneNumber}
         onChange={e=>handleFieldChange("providerPhoneNumber")}
        />
        </Grid>
        </Grid>
        <Grid container>
        <Grid className="claim-details-heading-style">Beneficiary Details</Grid>
      <Grid className="add_claim_form_row_style">
        <TextField
          id="beneficiary First Name"
          label="Beneficiary First Name"
         value={componentState.beneficiaryFirstName}
         onChange={e=>handleFieldChange("beneficiaryFirstName")}
        />
        <TextField
          id="beneficiary Last Name"
          label="Beneficiary Last Name"
         value={componentState.beneficiaryLastName}
         onChange={handleFieldChange("beneficiaryLastName")}
        />
          <TextField
          id="ptan"
          label="PTAN"
         value={componentState.ptan}
         onChange={handleFieldChange("ptan")}
        />  
        <TextField
        id="npi"
        label="NPI"
       value={componentState.npi}
       onChange={handleFieldChange("npi")}
      />
         <TextField
          id="Beneficiary Phone number"
          label="Beneficiary Phone #"
         value={componentState.beneficiaryPhoneNumber}
         onChange={handleFieldChange("beneficiaryPhoneNumber")}
        />
        </Grid>
      </Grid>
      <Grid container className=" form-buttons-container-style">
      <Grid item onClick={clearFields} className="form-buttons-style clear-Button-style">CLEAR</Grid>
      <Grid item onClick={submitClaim} className="form-buttons-style submit-Button-style">ADD CLAIM</Grid>
      </Grid>
      </Grid>
     
    </form>
  );
}

export default AddClaim

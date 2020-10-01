import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useSelector, useDispatch} from 'react-redux'
import NotFound from '../../Components/NotFound'
import './styles.css'
const useStyles = makeStyles({
  table: {
    minWidth: 650,
    padding:30
  },
});

const ViewClaim = () => {
  const classes = useStyles();
  const claims = useSelector(state=> state.addClaim.claims)
 
  return (
    // <TableContainer component={Paper} className="add_claim_form_style" >
    <>
    {claims.length === 0 ?  
      <NotFound bannerText={"No Claims at the moment"}/> 
     :  <Table className="table-core-style add_claim_form_style" aria-label="simple table" style={{    alignSelf: "center", marginTop: "10%"}}>
        <TableHead>
          <TableRow>
            <TableCell>Provider FirstName</TableCell>
            <TableCell align="right">Provider LastName</TableCell>
            <TableCell align="right">Provider Phone #</TableCell>
            <TableCell align="right">Ptan</TableCell>
            <TableCell align="right">Npi</TableCell>
            <TableCell align="right">Beneficiary FirstName</TableCell>
            <TableCell align="right">Beneficiary LastName</TableCell>
            <TableCell align="right">Beneficiary Phone #</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="tableBody-style">
         
          {claims.map((claim) => (
            <TableRow key={claim.providerFirstName}>
              <TableCell component="th" scope="claim">
                {claim.providerFirstName}
              </TableCell>
              <TableCell align="right">{claim.providerLastName}</TableCell>
              <TableCell align="right">{claim.providerPhoneNumber}</TableCell>
              <TableCell align="right">{claim.ptan}</TableCell>
              <TableCell align="right">{claim.npi}</TableCell>
              <TableCell align="right">{claim.beneficiaryFirstName}</TableCell>
              <TableCell align="right">{claim.beneficiaryLastName}</TableCell>
              <TableCell align="right">{claim.beneficiaryPhoneNumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>}
      </>
    // </TableContainer>
  );
}

export default ViewClaim
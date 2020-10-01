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
  root: {
    width: "80%",
    display: "flex",
    alignSelf: "center",
    margin: '15% 0px'
  },
  container: {
    maxHeight: 440,
  },
});



const ViewClaim = () => {
  const classes = useStyles();
  const claims = useSelector(state=> state.addClaim.claims)
 
  return (
    <>
    {claims.length === 0 ?  
      <NotFound bannerText={"No Claims at the moment"}/> 
     : <Paper className={classes.root}>
     <TableContainer className={classes.container} className="table-core-style">
       <Table stickyHeader aria-label="sticky table">
         <TableHead>
           <TableRow>
           <TableCell align="center" className="headerCell-style">Beneficiary First Name</TableCell>
            <TableCell align="center" className="headerCell-style">Beneficiary Last Name</TableCell>
            <TableCell align="center" className="headerCell-style">Policy ID</TableCell>
           </TableRow>
         </TableHead>
         <TableBody>
           {claims.map((claim) => {
             return (
              <TableRow key={claim.providerFirstName} >
           
              <TableCell align="center"  >{claim.beneficiaryFirstName}</TableCell>
              <TableCell align="center" >{claim.beneficiaryLastName}</TableCell>
              <TableCell align="center" >{claim.policyId}</TableCell>
            </TableRow>
             );
           })}
         </TableBody>
       </Table>
     </TableContainer>
   </Paper>}
     </>
  );
}

export default ViewClaim
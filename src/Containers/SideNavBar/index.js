import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import './styles.css'

const SideNavBar = (props) => {
    const navigateToRoute = route => {
        switch(route){
            case "Add Claim":
            props.history.push("/addClaim")
            break;
            case "View Claims":
            props.history.push("/viewClaim")
            break;
            case "Add Policy":
            props.history.push("/addPolicy")
            break;
            case "View Policy":
            props.history.push("/viewPolicy")
            break;
            default:
            break

        }
    }


    return <Grid className="sideNav_style" container style={{width:'10%', height:'100%'}}  direction='column'>
<Grid item onClick={e=> navigateToRoute("Add Claim")} className={props.location.pathname === "/addClaim" ? "clicked_Link_Style" : "link_notClicked_style"}>Add Claim</Grid>
<Grid item  onClick={e=> navigateToRoute("View Claims")} className={props.location.pathname === "/viewClaim" ? "clicked_Link_Style" : "link_notClicked_style"}>View Claim(s)</Grid>
<Grid item  onClick={e=> navigateToRoute("Add Policy")} className={props.location.pathname === "/addPolicy" ? "clicked_Link_Style" : "link_notClicked_style"}>Add Policy</Grid>
<Grid item  onClick={e=> navigateToRoute("View Policy")} className={props.location.pathname === "/viewPolicy" ? "clicked_Link_Style" : "link_notClicked_style"}>View Policy(s)</Grid>
        </Grid>
}

export default SideNavBar
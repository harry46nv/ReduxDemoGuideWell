import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddClaim from "./Containers/AddClaim";
import ViewClaim from "./Containers/ViewClaim";
import AddPolicy from "./Containers/AddPolicy";
import CreatePolicy from "./Containers/CreatePolicy";
import {Route, withRouter, Switch} from 'react-router-dom'
import SideNavBar from "./Containers/SideNavBar"
import Grid from '@material-ui/core/Grid'
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from 'react-toastify';



function App(props) {
  return (
    <Grid className="App" container direction='column'>
      <Grid className="app_header_style">
      <Grid className="app_header_logo_style"></Grid>
      <Grid className="app_header_title_style">Redux Demo</Grid>
      </Grid>
    
     <Grid className="containers-core-style" container  direction='row'>
     <SideNavBar {...props}/>
     <Grid container  direction='column' style={{width:'90%', height:'100%'}}>
      <Switch>
      <Route exact path="/viewPolicy" render={()=> <CreatePolicy  />}/>
      <Route exact path="/addPolicy" render={()=> <AddPolicy />}/>
      <Route exact path="/viewClaim" render={()=> <ViewClaim />}/>
      <Route exact path="/addClaim" render={()=> <AddClaim />}/>
      </Switch>
    </Grid>
    </Grid>
    <ToastContainer />
    </Grid>
  );
}

export default withRouter(App);
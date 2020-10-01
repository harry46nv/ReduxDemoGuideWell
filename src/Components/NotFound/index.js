import React from 'react'
import './styles.css'
import Grid from '@material-ui/core/Grid'

const NotFound = props => {
    return(<Grid className="notFoundText-style">
        {props.bannerText}
        </Grid>)
}

export default NotFound
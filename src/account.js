import React from 'react';
import { Grid } from '@mui/material';
import {Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useNavigate} from 'react-router-dom';
import { useLoginContext } from './LoginContext';
import { HomeButton } from './HomeButton';

function Account() {

    const {SaveLoginContext} = useLoginContext()
    const navigate = useNavigate()  

    function LogOut(){
        SaveLoginContext({isLoggedIn:false});
        navigate("/",true)
    }

    return (
        <>
        <Grid container spacing={2}>
            <Grid item xs={1}>
                <HomeButton/>
            </Grid>
            <Grid item xs={10}>
            </Grid>
            <Grid item xs={1}>
                <Button variant="contained"
                color="secondary"
                size="small"
                onClick = {()=>LogOut()}
                >Log out</Button>
            </Grid>
            <Grid item xs={2} >
            </Grid>
            <Grid item xs={1} >
                <AccountCircleIcon fontSize="large" />
            </Grid>
            <Grid item xs={7} >
                <h>Username</h>
            </Grid>
        </Grid>

            
        </>
    );
}

export{Account}

import React from 'react';
import {Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useNavigate} from 'react-router-dom';

function Account() {

    
    const navigate = useNavigate()

    return (
        <>
            <Button variant="contained"
            onClick = {()=>navigate("/",true)}
            >Back</Button>
            <br></br>
            <AccountCircleIcon fontSize="large" />
        </>
    );
}

export{Account}

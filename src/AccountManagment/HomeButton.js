import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function HomeButton(){

    const navigate = useNavigate();

    return <>
        <Button variant="contained"
                color="secondary"
                size="small"
                onClick = {()=>navigate("/",true)}
                >Home</Button>
    </>
}

export {HomeButton}
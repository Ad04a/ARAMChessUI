import React, { useReducer} from 'react';
import { InputField } from './register';
import { Button,Stack } from '@mui/material';

export function Login() {
   
    const email = "Email"
    const password = "Password"

    const reducer = (state, action) =>{
       var errorMessage = " "
        return state.map( (infoUnit)=>{
            
            if(infoUnit.name === action.name){
                return {...infoUnit, value:action.value, error:errorMessage}
            }
            return infoUnit
        } )
    }

    const [RegisterInformation, dispatch] = useReducer(reducer, 
    [
        {id: 0, name: email,           value:"", error: " "},
        {id: 2, name: password,        value:"", error: " "},
    ]);

    const handleSubmit = (event) => {
        console.log(RegisterInformation)
        event.preventDefault();
        alert(RegisterInformation[1].value + RegisterInformation[0].value );
    }

    return (
        <>
        <Stack
        component="form"
        sx={{
            width: '30ch',
        }}
        spacing={0.5}
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        >
            <h1>Login</h1>
            <InputField state = {RegisterInformation[0]} func={dispatch}/>
            <InputField state = {RegisterInformation[1]} func={dispatch}/>
            <Button variant="contained" disabled = {true/*IsValidForm()*/}
            onClick={handleSubmit}
            >Login</Button>
        </Stack>
        </>
    );
}

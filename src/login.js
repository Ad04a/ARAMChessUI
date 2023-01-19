import React, { useReducer} from 'react';
import { InputField } from './register';
import { Button,Stack,ButtonGroup } from '@mui/material';
import { useLoginContext } from './LoginContext';
import { useNavigate } from 'react-router-dom';

export function Login() {
   
    
    const navigate = useNavigate()

    const email = "Email"
    const password = "Password"
    const {setIsLoggedIn} = useLoginContext()
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
        {id: 1, name: password,        value:"", error: " "},
    ]);

    const IsValidForm = () =>{
        return RegisterInformation[0].value!=="" && RegisterInformation[1].value!=="" 
    }

    const handleSubmit = (event) => {
        console.log(RegisterInformation)
        event.preventDefault();
        alert(RegisterInformation[1].value + RegisterInformation[0].value );
        setIsLoggedIn(true);
        navigate("/",true)
    }

    return (
        <>
        <Stack
        component="form"
        sx={{
            width: '150ch',
            
        }}
        spacing={0.5}
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        >
            
            <ButtonGroup variant="contained" color="secondary">
            <Button disabled>Login</Button>
            <Button onClick = { ()=>navigate("/register", true) }>Register</Button>
            </ButtonGroup>
            <h1>Login</h1>
            <Stack sx={{width:"33ch"}}>
                <InputField state = {RegisterInformation[0]} func={dispatch}/>
                <InputField state = {RegisterInformation[1]} func={dispatch}/>
            </Stack>
            <Button variant="contained" disabled = {!IsValidForm()}
            onClick={handleSubmit}
            >Login</Button>
            
        </Stack>
        </>
    );
}

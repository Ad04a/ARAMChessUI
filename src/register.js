import React, { useReducer} from 'react';
import {TextField, Button, Stack} from '@mui/material';

export function InputField(props){
    return (
        <>
            <TextField 
                error = {props.state.error !==" "}
                id= {props.state.error ===" "? "standard-basic" : "outlined-error"}
                label={props.state.name} 
                variant="filled"
                size = "small" 
                margin = "normal"
                onChange={(e)=>props.func({...props.state, value:e.target.value})}
                helperText = {props.state.error}
            />
        </>
    )
}

export function Register() {
    const email = "Email"
    const username = "Username"
    const password = "Password"
    const confirmPassword = "Confirm password"
   
    const reducer = (state, action) =>{
       var errorMessage = " "
        return state.map( (infoUnit)=>{
            
            if(infoUnit.name === action.name){
                if(action.name === email){
                }
                else if(action.name === username){

                }else if(action.name === password){
                    if(action.value.length < 8){
                        errorMessage = "Password must be atlest 8 symbols"
                    }else if(action.value.length > 150){
                        errorMessage = "Password must less than 150 symbols"
                    }
                    if(action.value !== state[3].value){
                        state[3].error = "The given passwords don't match"
                    }
                }else if(action.name === confirmPassword){
                    if(action.value !== state[2].value){
                        errorMessage = "Passwords don't match"
                    }
                }
                if(action.value.includes(" ") && action.name !== confirmPassword){
                    errorMessage = "Can't use space in "+action.name
                }
                return {...infoUnit, value:action.value, error:errorMessage}
            }
            return infoUnit
        } )
    }

    const [RegisterInformation, dispatch] = useReducer(reducer, 
    [
        {id: 0, name: email,           value:"", error: " "},
        {id: 1, name: username,        value:"", error: " "},
        {id: 2, name: password,        value:"", error: " "},
        {id: 3, name: confirmPassword, value:"", error: " "},
    ]);

    const handleSubmit = (event) => {
        console.log(RegisterInformation)
        event.preventDefault();
        alert(RegisterInformation[1].value + RegisterInformation[0].value + RegisterInformation[2].value + RegisterInformation[3].value);
    }

    const IsValidForm = () =>{
        return (RegisterInformation[0].error!==" " || RegisterInformation[1].error!== " " || RegisterInformation[2].error!==" " || RegisterInformation[3].error!==" ") ||
                (RegisterInformation[0].value==="" || RegisterInformation[1].value=== "" || RegisterInformation[2].value==="" || RegisterInformation[3].value==="")
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
                <h1>Register</h1>
                <InputField state = {RegisterInformation[1]} func={dispatch}/>
                <InputField state = {RegisterInformation[0]} func={dispatch}/>
                <InputField state = {RegisterInformation[2]} func={dispatch}/>
                <InputField state = {RegisterInformation[3]} func={dispatch}/>
                <br></br>
                <br></br>
                <Button variant="contained" disabled = {IsValidForm()}
                onClick={handleSubmit}
                >Register</Button>
            </Stack>
        </>
    );
}

import React, { useReducer} from 'react';
import {TextField, Button, Stack,ButtonGroup} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { validEmail,validPassword } from './LoginRegexes';


export function InputField(props){
    return (
        <>
            <TextField 
                error = {props.state.error !==" "}
                id= {props.state.error ===" "? "standard-basic" : "outlined-error"}
                label={props.state.name} 
                variant="filled"
                size = "small" 
                margin = "none"
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
    const navigate = useNavigate()
   
    const reducer = (state, action) =>{
       var errorMessage = " "
        return state.map( (infoUnit)=>{
            
            if(infoUnit.name === action.name){
                if(action.name === email){
                    if(validEmail.test(action.value)===false){
                        errorMessage = "Email is not valid"
                    }
                }
                else if(action.name === username){
                    if(action.value.length < 3){
                        errorMessage = "Username must be atleast 8 symbols"
                    }
                    if(action.value.length > 40){
                        errorMessage = "Username must be less than 40 symbols"
                    }
                }else if(action.name === password){
                    if(action.value.length < 8){
                        errorMessage = "Password must be atleast 8 symbols"
                    }else if(action.value.length > 150){
                        errorMessage = "Password must be less than 150 symbols"
                    }else if(validPassword.test(action.value)===false){
                        errorMessage = "Must have a-Z, 0-9, 1 of: #?!@$%^&*-"
                    }
                    if(action.value !== state[3].value){
                        state[3].error = "The given passwords don't match"
                    }else{
                        state[3].error = " "
                    }
                }else if(action.name === confirmPassword){
                    if(action.value !== state[2].value){
                        errorMessage = "The given passwords don't match"
                    }
                }
                if(action.value.includes(" ") && action.name !== confirmPassword){
                    errorMessage = "Can't use space in "+action.name
                }
                if(action.value.length < 1){
                    errorMessage = " "
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
        navigate("/login",true)
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
            width: '150ch',
            
        }}
        spacing={0}
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        >   
            
            <ButtonGroup variant="contained" color="secondary" >
            <Button onClick = {()=>navigate("/login", true)}>Login</Button>
            <Button disabled>Register</Button>
            </ButtonGroup>
            <h1>Register</h1>
            <Stack sx={{width:"33ch"}}>
                <InputField fullWidth  state = {RegisterInformation[1]} func={dispatch}/>
                <InputField state = {RegisterInformation[0]} func={dispatch}/>
                <InputField state = {RegisterInformation[2]} func={dispatch}/>
                <InputField state = {RegisterInformation[3]} func={dispatch}/>
            </Stack>
            <br></br>
            <br></br>
            <Button variant="contained"  color="secondary" disabled = {IsValidForm()}
            onClick={handleSubmit}
            >Register</Button>
        </Stack>
        
        </>
    );
}

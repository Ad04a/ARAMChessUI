import { Login } from './login';
import { Register } from './register';
import React, { useState} from 'react';
import { Button, ButtonGroup, Stack } from '@mui/material';

export function AccountManagement() {

  
    const [AccountAction, setAccountAction] = useState(<Login/>);
  
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
          <ButtonGroup variant="contained" >
            <Button onClick={() => setAccountAction(<Login/>)}>Login</Button>
            <Button onClick={() => setAccountAction(<Register/>)}>Register</Button>
          </ButtonGroup>
          {AccountAction}
        </Stack>
      </>
    );
  }
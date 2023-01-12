import ReactDOM from 'react-dom/client';
import { Grid, Button, IconButton } from '@mui/material';
import { AccountManagement } from './AccountManagement'; 
import { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Index(){

  const loggedIn = false;

  const getAccountButton = ()=> {
    if(loggedIn){
      return <IconButton
              onClick
            ><AccountCircleIcon  sx={{ fontSize: 40 }} />
            </IconButton>
    }
    return <Button variant="contained"
      onClick = {() => setMainPage(<AccountManagement/>)}
      >Login</Button>
  }

  const main = <>
  <Grid container spacing={2}>
    <Grid item xs={11}>
      <h>xs=8</h>
    </Grid>
    <Grid item xs={1}>
      {getAccountButton()}
    </Grid>
    <Grid item xs={4}>
      <h>xs=4</h>
    </Grid>
    <Grid item xs={8}>
      <h>xs=8</h>
  </Grid>
</Grid>

</>

  const [MainPage, setMainPage] = useState(main)

  

  return MainPage
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
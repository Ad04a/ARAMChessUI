import { Grid, Button, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useLoginContext } from './LoginContext';
import {useNavigate} from 'react-router-dom';

function Main(){

  const navigate = useNavigate()
  const {isLoggedIn} = useLoginContext()

  const getAccountButton = ()=> {
    if(isLoggedIn){
      return  <IconButton color="secondary" size="large"
              onClick = {()=>navigate("/account",true)}
              >
                <AccountCircleIcon fontSize="large" />
              </IconButton>
    }
    return <Button variant="contained"
      onClick = {()=>navigate("/login",true)}
      >Login</Button>
  }
  return(
    <>
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
  ) 
}

export{Main}

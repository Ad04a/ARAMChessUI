import { Grid, Button, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useLoginContext } from './AccountManagment/LoginContext';
import {useNavigate} from 'react-router-dom';
import {Chessboard} from './Game/Chessboard.jsx'

import "./main.css"

function Main(){

  const navigate = useNavigate()
  const {GetLoginContext} = useLoginContext()

  const getAccountButton = ()=> {
    
    if(GetLoginContext().isLoggedIn===true){
      return  <IconButton color="secondary" size="large"
              onClick = {()=>navigate("/account",true)}
              >
                <AccountCircleIcon fontSize="large" />
              </IconButton>
    }
    return <Button variant="contained"
          color="secondary"
          onClick = {()=>navigate("/login",true)}
          >Login</Button>
  }
  return(
    <div id="main">
    <Grid container spacing={2}>
        <Grid item xs={11}>
        </Grid>

        <Grid item xs={1}>
        {getAccountButton()}
        </Grid>

        <Grid item xs={3}>
        </Grid>
        <Grid id ="board" item xs={6}>
        <Chessboard/>
        </Grid>
        <Grid item xs={3}>
        </Grid>

        <Grid item xs={12}>
        </Grid>

    </Grid>

    </div>
  ) 
}

export{Main}

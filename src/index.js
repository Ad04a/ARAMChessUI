import ReactDOM from 'react-dom/client';
import { LoginContextProvider } from './LoginContext';
import { Login } from './login';
import { Register } from './register';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Main } from './main';
import { Account } from './account';

function Index(){
  return(
      <>
    <LoginContextProvider>
    <BrowserRouter>
    <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
          <Route path="/" element={<Main />} />
    </Routes>
    </BrowserRouter>
    </LoginContextProvider>
      </>
  ) 
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);


    



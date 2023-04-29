import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import logo from '../logo.png';
import { FullWidthTextField, BlueButton } from "./index";

const Account = () => {

  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{ bgcolor: '#eeeeee', textAlign: 'center', padding: '10px'}} maxWidth="lg">
       <h2>PeerPerk</h2>
       <Avatar sx={{margin: 'auto'}} alt="PeerPerk" src={logo} />
      <Container sx={{ bgcolor: 'white', textAlign: 'center', padding: '10px', borderRadius: '10px'}} maxWidth="sm">
        <h3>項目タイトル</h3>
        <FullWidthTextField/>
        <FullWidthTextField/>
        <FullWidthTextField/>
        <BlueButton/>
      </Container>
      </Container>
    </React.Fragment>
  );
}

export default Account;
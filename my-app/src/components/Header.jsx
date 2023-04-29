import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../logo.png';
import Avatar from '@mui/material/Avatar';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{bgcolor: "#f5f5f5", color: '#666666'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Avatar alt="Remy Sharp" src={logo} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            PeerPerk
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{flexGrow: 0.1, display: { xs: 'none', sm: 'block' } }}
          >
            獲得ポイント : 5000pt
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{flexGrow: 0.1, display: { xs: 'none', sm: 'block' } }}
          >
            所有ポイント : 5000pt
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
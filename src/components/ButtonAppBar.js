import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector, useDispatch } from 'react-redux';
import { getUserName } from '../redux/user/userSelectors';
import { userLogout } from '../redux/user/userAction';


export function ButtonAppBar() {
  const userName = useSelector(getUserName);
  const dispatch = useDispatch()
  const signOut = () => {
    dispatch(userLogout());
    
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {userName}
          </Typography>
          <Button color="inherit" onClick={signOut}>LogOut</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

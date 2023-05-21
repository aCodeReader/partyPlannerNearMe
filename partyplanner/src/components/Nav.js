import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { BrowserRouter, Link, } from 'react-router-dom';
// import Router from './Router'

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Nav() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 12, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap component="div">
           
            Party Planner Near Me
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
         
            <ListItem>
              <Link to={'/'}>
              <ListItemButton>
  
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText primary={'HOME'} />
                
              </ListItemButton>
              </Link>
            </ListItem>

            <ListItem>
              <Link to={'/social'}>
              <ListItemButton>
  
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText primary={'SOCIAL'} />
              </ListItemButton>
              </Link>
            </ListItem>


            <ListItem>
              <Link to={'/weddings'}>
              <ListItemButton>

                <ListItemIcon>
                </ListItemIcon>
                <ListItemText primary={'WEDDINGS'} />
                
              </ListItemButton>
              </Link>
            </ListItem>
          

            <ListItem>
              <Link to={'/corporate'}>
              <ListItemButton>
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText primary={'CORPORATE'} />
                
              </ListItemButton>
              </Link>
            </ListItem>
        </List>
        <Divider />
        <List>
        <ListItem>
              <Link to={'/about'}>
              <ListItemButton>
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText primary={'ABOUT'} />
                
              </ListItemButton>
              </Link>
            </ListItem>

            <ListItem>
              <Link to={'/blog'}>
              <ListItemButton>
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText primary={'BLOG'} />
                
              </ListItemButton>
              </Link>
            </ListItem>

            <ListItem>
              <Link to={'/contact'}>
              <ListItemButton>
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText primary={'CONTACT'} />
                
              </ListItemButton>
              </Link>
            </ListItem>
          
       
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
    
      </Main>
    </Box>
  );
}
















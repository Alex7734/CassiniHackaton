import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import "./Sidebar.css";

import routes from '@/routes';
import useSidebar from '@/store/sidebar';
import auth from '@/components/LogIn/auth';

function Sidebar() {
  const [isSidebarOpen, sidebarActions] = useSidebar();

  return (
    <SwipeableDrawer
      anchor="left"
      open={isSidebarOpen}
      onClose={sidebarActions.close}
      onOpen={sidebarActions.open}
      disableBackdropTransition={false}
      swipeAreaWidth={60}
      classes={{ paper: 'sidebar-paper' }}
    >
      <div className="sidebar-background">
      <div style={{ position: 'absolute', top: 0, left: 0 }}>
  <button
    onClick={() => {
      console.log('Clicked');
      sidebarActions.close();
    }}
    style={{
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      zIndex: 3
    }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" fill="#3A8712">
      <path d="M12 9.414l-4.293-4.293-1.414 1.414 4.293 4.293-4.293 4.293 1.414 1.414 4.293-4.293 4.293 4.293 1.414-1.414-4.293-4.293 4.293-4.293-1.414-1.414-4.293 4.293z"/>
    </svg>
  </button>
</div>

        <List sx={{ width: 250, pt: (theme) => `${theme.mixins.toolbar.minHeight}px` }}>
          {/*<ListItem sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>*/}
          {/*  <img src="/GUIDR_LOGO.png" alt="GUIDR Logo" height="70" />*/}
          {/*</ListItem>*/}
          {Object.values(routes)
            .filter((route) => route.title)
            .map(({ path, title }) => (
              <ListItem sx={{ p: 0, borderRadius: 10 }} key={path}>
                <ListItemButton
                  sx={{
                    backgroundColor: '#78C51D',
                    color: '#fff',
                    textTransform: 'none',
                    fontFamily: 'Nunito',
                    justifyContent: 'right',
                    p: 0.5,
                    borderRadius: '15px',
                    marginTop: '20px',
                    marginLeft: '40px',
                    marginRight: '-10px',
                    width: 'auto',
                    '&:hover': {
                      backgroundColor: '#A6CBEB',
                    },
                  }}
                  component={Link}
                  to={path as string}
                  onClick={sidebarActions.close}
                >
                  <ListItemText primary={title} sx={{ textAlign: 'center', fontFamily: 'Nunito' }} />
                </ListItemButton>
              </ListItem>
            ))}
        </List>
      </div>
    </SwipeableDrawer>
  );
}

export default Sidebar;

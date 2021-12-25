import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import "../css/contact.css";

import Headshot from "../static/LockheedHeadshot.jpg";
import { Link } from 'react-router-dom';


const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <AppBar position="static" style={{ background: "#002159" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <Link to="/" style={{ textDecoration: 'none'}}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{ fontSize: 25, px: 2 }}>
                    Home
                  </Typography>
                </MenuItem>
                </Link>
                <Link to="/projects" style={{ textDecoration: 'none'}}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{ fontSize: 25, px: 2 }}>
                    Projects
                  </Typography>
                </MenuItem>
                </Link>
                <Link to="/experience" style={{ textDecoration: 'none'}}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{ fontSize: 25, px: 2 }}>
                    Experience
                  </Typography>
                </MenuItem>
                </Link>
                <Link to="/contact" style={{ textDecoration: 'none'}}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{ fontSize: 25, px: 2 }}>
                    Contact
                  </Typography>
                </MenuItem>
                </Link>
            </Menu>
          </Box>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Sam Kuhbander
            
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* Buttons  */}
            <Link to="/" style={{ textDecoration: 'none'}}>
              <Button
                className ="navButton"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontSize: 25 , px: 4}}
              >
                Home
              </Button>
            </Link>
            <Link to="/projects" style={{ textDecoration: 'none'}}>
              <Button
                className ="navButton"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontSize: 25 , px: 4}}
              >
                Projects
              </Button>
            </Link>
            <Link to="/experience" style={{ textDecoration: 'none'}}>
              <Button
                className ="navButton"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontSize: 25 , px: 4}}
              >
                Experience
              </Button>
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none'}}>
              <Button
                className ="navButton"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontSize: 25 , px: 4}}
              >
                Contact
              </Button>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
          <Link to="/contact" style={{ textDecoration: 'none'}}>
              <IconButton sx={{ p: 2}}>
                <Avatar alt="Sam Kuhbander" src={Headshot} sx={{ width: 60, height: 60}}/>
              </IconButton>
              </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

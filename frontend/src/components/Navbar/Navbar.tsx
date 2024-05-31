import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Stack, Toolbar, Tooltip, Typography } from "@mui/material";
import { useAuth } from "../../hooks/useAuth";
import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleToHome= () => {
        navigate('/posts')
    };

    const handleToAbout= () => {
        navigate('/about')
    };

    const handleToMyPosts= () => {
        navigate('/posts');
        setAnchorElUser(null);
    };

    const handleToProfile= () => {
        navigate('/profile');
        setAnchorElUser(null);
    };

    const handleToLogin= () => {
        navigate('/login');
        setAnchorElUser(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
    <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <img src = "src/assets/react.svg" alt = "logo"/>
                <Typography 
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
                >
                    LOGO
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                    >
                    </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={true}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                    >
                        <MenuItem key={'Home'}>
                        <Typography textAlign="center">{'Home'}</Typography>
                        </MenuItem>
                        <MenuItem key={'About'}>
                        <Typography textAlign="center">{'About'}</Typography>
                        </MenuItem>
                </Menu>
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    <Button
                        key={'Home'}
                        onClick={handleToHome}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        {'Home'}
                    </Button>
                    <Button
                        key={'About'}
                        onClick={handleToAbout}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        {'About'}
                    </Button>
                </Box>
                {user ? 
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        <MenuItem key={'Profile'} onClick={handleToProfile}>
                        <Typography textAlign="center">{'Profile'}</Typography>
                        </MenuItem>
                        <MenuItem key={'My Posts'} onClick={handleToMyPosts}>
                        <Typography textAlign="center">{'My Posts'}</Typography>
                        </MenuItem>
                        <MenuItem key={'Logout'} onClick={logout}>
                        <Typography textAlign="center">{'Logout'}</Typography>
                        </MenuItem>
                    </Menu>
                </Box>
                :
                <Button
                        key={'Login'}
                        onClick={handleToLogin}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        {'Login'}
                    </Button>
                }
                
            </Toolbar>
        </Container>
    </AppBar>
    );
}
  
export default Navbar;
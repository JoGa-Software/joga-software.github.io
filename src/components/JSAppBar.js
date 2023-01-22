import React from "react";
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import router from '../routes';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

class JSAppBar extends React.Component {

    static pages = [
        { title: "Games", href: "/" },
    ]

    constructor(props) {
        super(props)

        this.state = {
            anchorElNav: null
        }
    }

    handleOpenNavMenu = (event) => {
        this.setState({
            anchorElNav: event.currentTarget
        })
    };

    handleCloseNavMenu = () => {
        this.setState({
            anchorElNav: null
        });
    };

    handlePageClick = (page) => {
        this.handleCloseNavMenu()
        router.navigate(page.href)
    }

    render() {

        const {
            anchorElNav
        } = this.state

        return (
            <AppBar color="primary" position="static">
                <Toolbar>
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
                                letterSpacing: '.2rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                }}
                    >
                    JoGa Software
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={this.handleOpenNavMenu}
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
                            onClose={this.handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                        {JSAppBar.pages.map((page, index) => (
                            <MenuItem key={index} onClick={() => this.handlePageClick(page)}>
                                <Typography textAlign="center">{page.title}</Typography>
                            </MenuItem>
                        ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        JoGa Software
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {JSAppBar.pages.map((page, index) => (
                        <Button
                            key={index}
                            onClick={() => this.handlePageClick(page)}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {page.title}
                        </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        );
    }
}

export default JSAppBar;
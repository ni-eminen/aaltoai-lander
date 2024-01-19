import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

interface Page {
    handle: string;
    ref?: any;
}

function ResponsiveAppBar({ pages }: { pages: Page[] }, ref: any) {
    const { socialsRef, boardRef, partnersRef } = ref;
    const refs = [socialsRef, boardRef, partnersRef]
    const pagesWithRefs = pages.map((page, i) => {
        return { ...page, ref: refs[i] }
    })

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" color='primary'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box style={{ height: 100, justifyContent: "center", display: "flex" }}
                        component={'img'} src="aaiblack.png" />

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color='secondary'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            color='common.white'
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
                            onClose={() => {
                                handleCloseNavMenu()
                            }}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pagesWithRefs.map((page) => (
                                <MenuItem key={page.handle} onClick={(e: any) => {
                                    page.ref.current.scrollIntoView({ behavior: 'smooth' })
                                    handleCloseNavMenu()
                                }}>
                                    <Typography variant='h4' textAlign="center">{page.handle}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pagesWithRefs.map((page) => (
                            <Button
                                key={page.handle}
                                onClick={() => {
                                    page.ref.current.scrollIntoView({ behavior: 'smooth' })
                                    handleCloseNavMenu()
                                }}
                                sx={{ my: 2, color: 'white', display: 'block', fontSize: 20, mx: 4 }}
                            >
                                {page.handle}
                            </Button>
                        ))}
                    </Box>

                    {/* <Box sx={{ flexGrow: 0 }}>
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
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box> */}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default React.forwardRef(ResponsiveAppBar);
import * as _React from 'react';
import { useState } from 'react'; //useState is a React Hook
import {
    Button,
    Drawer, 
    ListItemButton,
    List,
    ListItemText,
    AppBar,
    Toolbar,
    IconButton,
    Stack, //flexbox
    Typography,
    Divider, //this is literally just a line
    CssBaseline,
    Box //this is just a div 
} from '@mui/material'; 
import { useNavigate } from 'react-router-dom';
import CottageIcon from '@mui/icons-material/Cottage';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';




//internal imports
import { theme } from '../../../Theme/themes'; 



const drawerWidth = 200; 


const navStyles = {
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp, //number 
            duration: theme.transitions.duration.leavingScreen //string calculation of the duration
        })
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut, //number 
            duration: theme.transitions.duration.enteringScreen //string calculation of the duration
        })
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    hide: {
        display: 'none'
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    toolbar: {
        display: 'flex',    
    },
    toolbarButton: {
        marginLeft: 'auto',
        color: theme.palette.primary.contrastText
    },
    signInStack: {
        position: 'absolute',
        top: '20%',
        right: '50px'    
    }
}



export const NavBar = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();



    const handleDrawerOpen = () => {
        setOpen(true);
    }


    const handleDrawerClose = () => {
        setOpen(false);
    }

    const navLinks = [
        {
            text: 'Home',
            icon: <CottageIcon/>,
            onClick: () => navigate('/')
        },
        {
            text: 'Shop',
            icon: <ShoppingBagIcon />,
            onClick: () => navigate('/shop')
        },
        {
            text: 'Cart',
            icon: <ShoppingCartIcon />,
            onClick: () => navigate('/cart')
        }
    ]



    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                sx={open? navStyles.appBarShift : navStyles.appBar}
                position="fixed"
            >
                <Toolbar sx={navStyles.toolbar}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={ open? navStyles.hide : navStyles.menuButton }
                    >
                        <ShoppingBasketIcon/>
                    </IconButton>
                </Toolbar>
                <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={navStyles.signInStack} >
                    <Typography variant="body2" sx={{ color: 'inherit' }} >
                        Welcome
                    </Typography>
                    <Button 
                        variant="contained" 
                        color="info"
                        size = 'large'
                        sx = {{ marginLeft: '20px'}} 
                    >
                        Sign in
                    </Button>
                </Stack>
        </AppBar>
        <Drawer
            sx={open? navStyles.drawer : navStyles.hide}
            variant = 'persistent'
            anchor= 'left'
            open = {open}
        >
            <Box sx = {navStyles.drawerHeader }>
                    <IconButton onClick={handleDrawerClose}>
                        <ShoppingBasketIcon />
                    </IconButton>
                </Box>
                <Divider />
                <List>
                    { navLinks.map( (item) => {
                        // using variable deconstruction to deconstruct our object/dictionary
                        const { text, icon, onClick } = item; 
                        return (
                            <ListItemButton key={text} onClick={onClick}>
                                <ListItemText primary={text} />
                                { icon }
                            </ListItemButton>
                        )

                    })}
                </List>
            </Drawer>
        </Box>
    )
}
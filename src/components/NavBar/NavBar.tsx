import { useEffect, useRef, useState } from "react";
import { KeyboardArrowUp, Menu } from '@mui/icons-material'
import { NavLink } from "react-router-dom";

import { AppBar, Box, Divider, Fab, Fade, IconButton, Toolbar, Typography, useScrollTrigger } from "@mui/material"
import './styles.css'


interface Props {
    children: React.ReactElement;
}


function ScrollTop(props: Props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        target: window,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const anchor = (
            (event.target as HTMLDivElement).ownerDocument || document
        ).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({
                block: 'center',
            });
        }
    };

    return (
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                {children}
            </Box>
        </Fade>
    );
}

interface ItemsNavBarProps {
    closeMenu?: () => void;
}

const ItemsNavBar = ({ closeMenu }: ItemsNavBarProps) => (
    <>
        <NavLink aria-label="characters-navbar-item" to="/" onClick={closeMenu} className={({ isActive }) => `navBarItem ${isActive ? 'active' : ''}`}>
            <Typography variant="h6" color="white" component="div">
                Characters
            </Typography>
        </NavLink>
        <NavLink aria-label="episodes-navbar-item" to="/episodes" onClick={closeMenu} className={({ isActive }) => `navBarItem ${isActive ? 'active' : ''}`}>
            <Typography variant="h6" color="white" component="div">
                Episodes
            </Typography>
        </NavLink>
        <NavLink aria-label="locations-navbar-item" to="/locations" onClick={closeMenu} className={({ isActive }) => `navBarItem ${isActive ? 'active' : ''}`}>
            <Typography variant="h6" color="white" component="div">
                Locations
            </Typography>
        </NavLink>
    </>
)

export const NavBar = (props: Props) => {

    const navbarRef = useRef<HTMLElement>(null);

    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    }

    const handleOutsideClick = (event: MouseEvent) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
            setShowMenu(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    return (
        <>
            <AppBar component="nav" position="fixed" ref={navbarRef}>
                <Toolbar sx={{ display: { xs: 'block', sm: 'flex' }, paddingBottom: { xs: '24px', sm: '0px' } }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }}
                        onClick={handleShowMenu}
                    >
                        <Menu />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Rick & Morty
                    </Typography>
                    <Box component="div" sx={{ display: { xs: 'block' } }}>
                        {
                            showMenu && (
                                <div>
                                    <Divider style={{ marginTop: '8px' }} />
                                    <Box sx={{ display: { xs: 'block', sm: 'none' }, flexDirection: 'column' }}>
                                        <ItemsNavBar closeMenu={() => setShowMenu(false)} />
                                    </Box>
                                </div>
                            )
                        }
                        <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'row' }}>
                            <ItemsNavBar />
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar id="back-to-top-anchor" />
            {props.children}
            <ScrollTop {...props}>
                <Fab color="primary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUp />
                </Fab>
            </ScrollTop>
        </>
    )
}
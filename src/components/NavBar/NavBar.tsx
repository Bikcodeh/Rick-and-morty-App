import { AppBar, Box, Fab, Fade, Toolbar, Typography, useScrollTrigger } from "@mui/material"
import { KeyboardArrowUp } from '@mui/icons-material'
import { NavLink } from "react-router-dom";
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

export const NavBar = (props: Props) => {
    return (
        <>
            <AppBar component="nav" position="fixed">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Rick & Morty
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'row' }}>
                        <NavLink to="/" className={({ isActive }) => `navBarItem ${isActive ? 'active' : ''}`}>
                            <Typography variant="h6" color="white" component="div">
                                Characters
                            </Typography>
                        </NavLink>
                        <NavLink to="/episodes" className={({ isActive }) => `navBarItem ${isActive ? 'active' : ''}`}>
                            <Typography variant="h6" color="white" component="div">
                                Episodes
                            </Typography>
                        </NavLink>
                        <NavLink to="/locations" className={({ isActive }) => `navBarItem ${isActive ? 'active' : ''}`}>
                            <Typography variant="h6" color="white" component="div">
                                Locations
                            </Typography>
                        </NavLink>
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
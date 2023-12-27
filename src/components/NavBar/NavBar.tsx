import { AppBar, Box, Toolbar, Typography } from "@mui/material"
import { NavLink } from "react-router-dom";
import './styles.css'

export const NavBar = () => {
    return (
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
                    <NavLink to="/" className={( {isActive }) => `navBarItem ${isActive ? 'active': ''}`}>
                        <Typography variant="h6" color="white" component="div">
                            Characters
                        </Typography>
                    </NavLink>
                    <NavLink to="/episodes" className={( {isActive }) => `navBarItem ${isActive ? 'active': ''}`}>
                        <Typography variant="h6" color="white" component="div">
                            Episodes
                        </Typography>
                    </NavLink>
                    <NavLink to="/locations" className={( {isActive }) => `navBarItem ${isActive ? 'active': ''}`}>
                        <Typography variant="h6" color="white" component="div">
                            Locations
                        </Typography>
                    </NavLink>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
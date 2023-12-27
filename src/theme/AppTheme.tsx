import { createTheme } from "@mui/material";

export const AppTheme = createTheme({
    typography: {
        fontFamily: 'Lato, sans-serif'
    },
    palette: {
        primary: {
            light: '#006d31',
            main: '#006d31',
            dark: '#68de85'
        },
        secondary: {
            light: '#506351',
            main: '#506351',
            dark: '#b7ccb6'
        },
        error: {
            light: '#ba1a1a',
            main: '#ba1a1a',
            dark: '#ffb4ab'
        },
        text: {
            primary: '#ffffff',
            secondary: '#ffffff'
        }
    }
});
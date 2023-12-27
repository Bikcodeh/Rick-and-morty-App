import { Grid, Typography } from '@mui/material';
import React from 'react'

export const Title = React.memo(() => {
    return (
        <Grid container justifyContent='center' mb={2}>
            <Grid item>
               <Typography variant='h4' component='h4'>Rick  & Morty App</Typography>
            </Grid>
        </Grid>
    )
});
import React from 'react'
import { Grid, Typography } from '@mui/material';

interface Props {
    text: string;
}

export const Title: React.FC<Props> = React.memo(( { text } ) => {
    return (
        <Grid container justifyContent='center' mb={2}>
            <Grid item>
               <Typography variant='h4' component='h4'>{ text }</Typography>
            </Grid>
        </Grid>
    )
});
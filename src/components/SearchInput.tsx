import React from "react";
import { Button, Grid, TextField } from "@mui/material"


export const SearchInput: React.FC = () => {
  return (
    <Grid container justifyContent='center' alignContent='center' alignItems='center' gap={2}>
      <Grid item xs={6}>
        <TextField fullWidth size="small" id="outlined-basic" label="Search character" variant="outlined" />
      </Grid>
      <Grid item>
        <Button variant='contained'>Search</Button>
      </Grid>
    </Grid>
  )
}
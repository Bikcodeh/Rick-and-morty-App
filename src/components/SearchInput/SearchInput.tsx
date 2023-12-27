import React, { ChangeEvent } from "react";
import { Button, Grid, TextField } from "@mui/material"
import './styles.css'

interface Props {
  text: string;
  onInputChange: (text: string) => void;
  onSearch: () => void;
}

export const SearchInput: React.FC<Props> = ({ text, onInputChange, onSearch }) => {

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onInputChange(event.target.value);
  }

  return (
    <Grid container justifyContent='center' alignContent='center' alignItems='center' gap={2}>
      <Grid item xs={6}>
        <TextField value={text} className="searchInput" fullWidth size="small" id="outlined-basic" label="Search character" variant="outlined" onChange={handleOnChange} />
      </Grid>
      <Grid item>
        <Button onClick={() => onSearch()} variant='contained'>Search</Button>
      </Grid>
    </Grid>
  )
}
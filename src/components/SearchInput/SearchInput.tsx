import React, { ChangeEvent } from "react";
import { Button, Grid, TextField } from "@mui/material"
import './styles.css'

interface Props {
  placeholder: string;
  text: string;
  onInputChange: (text: string) => void;
  onSearch: () => void;
}

export const SearchInput: React.FC<Props> = ({ text, placeholder, onInputChange, onSearch }) => {

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onInputChange(event.target.value);
  }

  return (
    <Grid
      container
      justifyContent='center'
      alignContent='center'
      alignItems='center'
      gap={2}
    >
      <Grid item xs={6}>
        <TextField
          aria-label="search-input"
          inputProps={{ 'data-testid': 'search-input' }}
          value={text}
          className="searchInput"
          fullWidth size="small"
          id="outlined-basic"
          label={`Search ${placeholder}`}
          variant="outlined"
          onChange={handleOnChange}
        />
      </Grid>
      <Grid item>
        <Button
          onClick={() => onSearch()}
          variant='contained'
          aria-label="search-button"
        >
          Search
        </Button>
      </Grid>
    </Grid>
  )
}
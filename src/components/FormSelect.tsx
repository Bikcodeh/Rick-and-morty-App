import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { FC } from "react";

interface Props {
  text: string;
  onChangeValue: (value: string) => void;
}

export const FormSelect: FC<Props> = ({ text, onChangeValue }) => {

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Episode</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={text}
        label="Episode"
        onChange={(e) => onChangeValue(e.target.value)}
      >
         <MenuItem disabled value="">
            <em>Select an episode</em>
          </MenuItem>
       {
        Array.from({ length: 50}, (_, i) => (<MenuItem key={`episode-${i + 1}`} value={i + 1}>{`Episode ${i + 1}`}</MenuItem>))
       }
      </Select>
    </FormControl>
  )
}

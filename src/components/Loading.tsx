import { CircularProgress, Grid } from "@mui/material";

export const Loading = () => {
  return (
    <Grid container justifyContent="center">
        <Grid item>
            <CircularProgress />
        </Grid>
    </Grid>
  )
}

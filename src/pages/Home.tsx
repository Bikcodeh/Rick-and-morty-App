import { Grid } from "@mui/material"
import {CardCharacter, SearchInput, Title } from "../components"

export const Home = () => {
  return (
    <>
      <Title />
      <SearchInput />
      <Grid mt={8} container justifyContent="center" gap={2} mb={16}>
        <CardCharacter />
        <CardCharacter />
        <CardCharacter />
        <CardCharacter />
        <CardCharacter />
        <CardCharacter />
      </Grid>
    </>
  )
}
import { Grid } from "@mui/material"
import {CardCharacter, SearchInput, Title } from "../components"
import { useCharacters } from "../hooks/useCharacters"

export const Home = () => {

  const  { charactersQuery } = useCharacters();
  return (
    <>
      <Title />
      <SearchInput />
      <Grid mt={8} container justifyContent="center" gap={2} mb={16}>
        {
          charactersQuery.data?.results.map(character => (<CardCharacter key={character.id} character={character} />))
        }
      </Grid>
    </>
  )
}
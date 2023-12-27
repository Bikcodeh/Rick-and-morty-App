import { useState } from "react"
import { Grid } from "@mui/material"
import { CardCharacter, SearchInput, Title } from "../components"
import { useCharacters } from "../hooks/useCharacters"

export const Home = () => {

  const [querySearch, setQuerySearch] = useState('');

  const { charactersQuery } = useCharacters(querySearch);

  const handleOnSearch = () => {
      charactersQuery.refetch()
  }

  return (
    <>
      <Title />
      <SearchInput text={querySearch} onInputChange={(text) => setQuerySearch(text)} onSearch={handleOnSearch} />
      <Grid mt={8} container justifyContent="center" gap={2} mb={16}>
        {
          charactersQuery.data?.results.map(character => (<CardCharacter key={character.id} character={character} />))
        }
      </Grid>
    </>
  )
}
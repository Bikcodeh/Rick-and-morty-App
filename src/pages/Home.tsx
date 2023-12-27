import { useState } from "react"
import { Grid } from "@mui/material"
import { CardCharacter, SearchInput, Title } from "../components"
import { useGetData } from "../hooks/useGetData"
import { Character } from "../interfaces"

export const Home = () => {

  const [querySearch, setQuerySearch] = useState('');

  const { rickAndMortyQuery } = useGetData<Character>(querySearch, 'character');

  const handleOnSearch = () => {
    rickAndMortyQuery.refetch()
  }

  return (
    <>
      <Title text="Characters"/>
      <SearchInput text={querySearch} onInputChange={(text) => setQuerySearch(text)} onSearch={handleOnSearch} />
      <Grid mt={8} container justifyContent="center" gap={2} mb={16}>
        {
          rickAndMortyQuery.data?.results.map(character => (<CardCharacter key={character.id} character={character} />))
        }
      </Grid>
    </>
  )
}
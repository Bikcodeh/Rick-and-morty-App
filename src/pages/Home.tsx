import { useState } from "react"
import { CircularProgress, Grid } from "@mui/material"
import { CardCharacter, Error, Loading, Pagination, SearchInput, Title } from "../components"
import { useGetData } from "../hooks/useGetData"
import { Character } from "../interfaces"
import { AxiosError } from "axios"

export const Home = () => {

  const [querySearch, setQuerySearch] = useState('');

  const { rickAndMortyQuery, page, nextPage, prevPage, prevAvailable, nextAvailable } = useGetData<Character>(querySearch, 'character');

  const { isFetching, isLoading, error } = rickAndMortyQuery;

  const handleOnSearch = () => {
    rickAndMortyQuery.refetch()
  }

  if (isLoading || isFetching) return (<Loading />);


  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Title text="Characters" />
      <SearchInput placeholder="characters" text={querySearch} onInputChange={(text) => setQuerySearch(text)} onSearch={handleOnSearch} />
      {
        rickAndMortyQuery.isError
          ? <Error error={error as AxiosError} />
          : <Grid mt={8} container sx={{ justifyContent: { xs: 'center', sm: 'center', md: 'space-between' } }} gap={2} mb={2}>
            {
              rickAndMortyQuery.data?.results.map(character => (<CardCharacter key={character.id} character={character} />))
            }
            {
              isFetching
                ? <CircularProgress sx={{ alignSelf: 'center', my: '16px' }} />
                : <Pagination prevAvailable={prevAvailable} nextAvailable={nextAvailable} isFetching={rickAndMortyQuery.isFetching} onNext={nextPage} onPrev={prevPage} currentPage={page.toString()} />
            }
          </Grid>
      }
    </div>
  )
}
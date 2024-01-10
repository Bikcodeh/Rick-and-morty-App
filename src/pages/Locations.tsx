import { useState } from "react"
import { AxiosError } from "axios"
import { Grid } from "@mui/material"
import { CardLocation, Error, Loading, SearchInput, Title } from "../components"
import { useGetData } from "../hooks/useGetData"
import { Location } from "../interfaces"

export const Locations = () => {

  const [querySearch, setQuerySearch] = useState('');

  const { rickAndMortyQuery } = useGetData<Location>(querySearch, 'location');


  const handleOnSearch = () => {
    rickAndMortyQuery.refetch()
  }

  if (rickAndMortyQuery.isLoading || rickAndMortyQuery.isFetching) return (<Loading />)

  return (
    <>
      <Title text="Locations" />
      <SearchInput placeholder="Location" text={querySearch} onInputChange={(text) => setQuerySearch(text)} onSearch={handleOnSearch} />
      <Grid mt={8} container justifyContent="center" gap={2} mb={16}>
        {
           rickAndMortyQuery.isError
           ? <Error error={rickAndMortyQuery.error as AxiosError} />
           : rickAndMortyQuery.data?.results.map(location => (<CardLocation key={location.id} location={location} />))
        }
      </Grid>
    </>
  )
}

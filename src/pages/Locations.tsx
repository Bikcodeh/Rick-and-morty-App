import { useState } from "react"
import { Grid } from "@mui/material"
import { CardLocation, Loading, SearchInput, Title } from "../components"
import { useGetData } from "../hooks/useGetData"
import { Location } from "../interfaces"

export const Locations = () => {

  const [querySearch, setQuerySearch] = useState('');

  const { rickAndMortyQuery } = useGetData<Location>(querySearch, 'location');


  const handleOnSearch = () => {
    rickAndMortyQuery.refetch()
  }

  if (rickAndMortyQuery.isLoading) return (<Loading />)

  return (
    <>
      <Title text="Locations" />
      <SearchInput placeholder="Location" text={querySearch} onInputChange={(text) => setQuerySearch(text)} onSearch={handleOnSearch} />
      <Grid mt={8} container justifyContent="center" gap={2} mb={16}>
        {
          rickAndMortyQuery.data?.results.map(location => (<CardLocation onItemClick={value => {}} key={location.id} location={location} />))
        }
      </Grid>
    </>
  )

}

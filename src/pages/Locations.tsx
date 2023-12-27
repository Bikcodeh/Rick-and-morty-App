import { useState } from "react"
import { Grid } from "@mui/material"
import { SearchInput, Title } from "../components"
import { useGetData } from "../hooks/useGetData"
import { Location } from "../interfaces"

export const Locations = () => {

  const [querySearch, setQuerySearch] = useState('');

  const { rickAndMortyQuery } = useGetData<Location>(querySearch, 'location');

  const handleOnSearch = () => {
    rickAndMortyQuery.refetch()
  }

  return (
    <>
      <Title text="Locations" />
      <SearchInput text={querySearch} onInputChange={(text) => setQuerySearch(text)} onSearch={handleOnSearch} />
      <Grid mt={8} container justifyContent="center" gap={2} mb={16}>
        {
          JSON.stringify(rickAndMortyQuery.data?.results)
        }
      </Grid>
    </>
  )

}

import { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { CardCharacter, FormSelect } from "../components";
import { useGetEpisode } from "../hooks/useEpisode";

export const Episodes = () => {

  const [selectedEpisode, setSelectedEpisode] = useState('1')
  const { episodeQuery, charactersQuery } = useGetEpisode(selectedEpisode);

  return (
    <Grid container flexDirection="column">
      <Grid item mb={8} alignSelf="center" flexDirection="row" display="flex" flexWrap="wrap" justifyContent="center">
        <Typography variant="h3" width="100%" textAlign="center" fontWeight={700} mr={1}>Episode {selectedEpisode}: <span style={{ color: 'green'}}>{ episodeQuery.data?.name }</span></Typography>
        <Typography alignSelf="center" variant="inherit" fontWeight={700} mr={1}>Air date: {episodeQuery.data?.air_date}</Typography>
      </Grid>
      <Grid container flexDirection="row" gap={2} sx={{ justifyContent:{ xs: 'center', md: 'space-between' }}}>
        <Grid item xs={12} md={2}>
          <FormSelect text={selectedEpisode} onChangeValue={(val) => { setSelectedEpisode(val)}} />
        </Grid>
        <Grid item md={9} flexDirection="row" display="flex" gap={2} flexWrap="wrap" sx={{ justifyContent:{ xs: 'center', md: 'space-between' }}}>
          {
            charactersQuery.data && charactersQuery.data.length > 1 && charactersQuery.data.map(it => (<CardCharacter key={it.id} character={it} />))
          }
        </Grid>
      </Grid>
    </Grid>
  )
}

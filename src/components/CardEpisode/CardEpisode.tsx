import React from "react";
import { Episode } from "../../interfaces"
import { Box, Typography } from "@mui/material";

interface Props {
    episode: Episode;
}

export const CardEpisode: React.FC<Props> = ({ episode }) => {
  return (
    <Box borderRadius={4} padding={2} color="white" bgcolor="primary.main" display="flex" flexDirection="column">
      <Typography variant="h6">{episode.episode}</Typography>
      <Typography variant="body1">{episode.name}</Typography>
      <Typography variant="body1">{episode.air_date}</Typography>
    </Box>
  )
}

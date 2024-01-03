import { Navigate, useParams } from "react-router-dom"
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { useGetCharacter } from "../hooks/useGetCharacter";
import styled from "@emotion/styled";
import { CardEpisode } from "../components/CardEpisode/CardEpisode";
import { Loading } from "../components";

const Image = styled.img`
    border-radius: 8px;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    margin-right: 46px;
`;

export const Character = () => {

    const { id } = useParams()
    if (!id) return (<Navigate to="/" />);
    const { characterQuery, episodesQuery } = useGetCharacter(+id);

    if (characterQuery.isLoading) return (<Loading />);

    return (
        <Grid container sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <Typography
                variant="h3"
                width="100%"
                textAlign="center"
                fontWeight={700} mr={1}
                mb={8}
            >
                {characterQuery.data?.name}
            </Typography>
            <Grid item display="flex" sx={{ flexDirection: { xs: 'column', md: 'row' } }} className="container-content">
                <Box sx={{ marginBottom: { xs: '46px', md: '0' } }}>
                    <Image src={characterQuery.data?.image} />
                </Box>
                <Box component="div" sx={{ justifyContent: { xs: 'center' } }} display="flex" flexDirection="column">
                    <p><strong>Status: </strong>{characterQuery.data?.status}</p>
                    <p><strong>Gender: </strong>{characterQuery.data?.gender}</p>
                    <p><strong>Specie: </strong>{characterQuery.data?.species}</p>
                    <p><strong>Location: </strong>{characterQuery.data?.location.name}</p>
                    <p><strong>Origin: </strong>{characterQuery.data?.origin.name}</p>
                </Box>
            </Grid>
            <Grid container mt={8}>
                <Typography
                    variant="h5"
                    width="100%"
                    textAlign="center"
                    fontWeight={700} mr={1}
                    mb={4}
                >
                    Episodes
                </Typography>
                <Grid container component="div" spacing={2}>
                    {
                        episodesQuery.isLoading
                            ? <CircularProgress />
                            : episodesQuery.data && Array.isArray(episodesQuery.data)
                                ? episodesQuery.data.map(it => (<Grid key={it.id} item xs={12} md={6}><CardEpisode episode={it} /></Grid>))
                                : <Grid item xs={12} md={6}><CardEpisode episode={episodesQuery.data!} /></Grid>
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}

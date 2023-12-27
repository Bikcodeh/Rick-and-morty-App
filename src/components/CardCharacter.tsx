import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { Status } from "."

export const CardCharacter = () => {
    return (
        <Card sx={{ border: '2px solid #74ee15' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Status text="Alive" status={true}/>
            <CardMedia
                component="img"
                height="180"
                image="https://sm.ign.com/ign_es/news/r/rick-and-m/rick-and-morty-season-7-gets-rick-heavy-first-look-fall-rele_8uza.jpg"
            />
            </div>
            <CardContent sx={{ width: 220}}>
                <Typography gutterBottom variant="h5" component="div" color="black">
                    Lizard
                </Typography>
                <Typography variant="body2" color="GrayText">Lizards are a widespread group</Typography>
                <Typography variant="body2" color="GrayText">Lizards are a widespread group</Typography>
                <Typography variant="body2" color="GrayText">Lizards are a widespread group</Typography>
            </CardContent>
        </Card>
    )
}

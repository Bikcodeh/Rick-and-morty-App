import { FC } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material"

import { Status } from ".."
import { Character } from "../../interfaces"
import './styles.css'

interface Props {
    character: Character;
}

export const CardCharacter: FC<Props> = ({ character }) => {
    return (
        <Card component="div" sx={{ border: '2px solid #74ee15' }} className="characterContainer">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Status status={character.status} />
                <CardMedia
                    component="img"
                    height="180"
                    image={character.image}
                />
            </div>
            <CardContent sx={{ width: 220, paddingBottom: '0 !important', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                <Typography gutterBottom variant="h5" component="div" color="black" sx={{ whiteSpace: 'noWrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                    {character.name}
                </Typography>
            </CardContent>
        </Card>
    )
}

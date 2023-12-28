import { FC } from "react"
import { Button, Grid, Typography } from "@mui/material"

interface Props {
    currentPage: string;
    onNext: () => void;
    onPrev: () => void;
    prevAvailable: boolean;
    nextAvailable: boolean;
    isFetching: boolean;
}

export const Pagination: FC<Props> = ({ currentPage, onNext, onPrev, prevAvailable, nextAvailable, isFetching  }) => {
    return (
        <Grid container component="div" justifyContent="space-between" alignContent="center" alignItems="center" mb={8}>
            <Grid item>
                <Button disabled={ isFetching || !prevAvailable} onClick={() => onPrev()} variant="contained">Prev</Button>
            </Grid>
            <Typography fontWeight={700} component="h4">{currentPage}</Typography>
            <Grid item>
                <Button disabled={ isFetching || !nextAvailable} onClick={() => onNext()} variant="contained">Next</Button>
            </Grid>
        </Grid>
    )
}

import { Grid, Typography } from "@mui/material"
import Lottie from 'react-lottie';
import lottieData from '../../public/assets/lottie/not_found.json'
import { AxiosError } from "axios";
import { FC } from "react";
import { handleError } from "../helpers";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

interface Props {
    error?: AxiosError;
}

export const Error: FC<Props> = ({ error  }) => {
    return (
        <Grid container justifyContent="center" flexDirection="column" alignItems="center" mt={4}>
            <Grid item>
                <Typography variant="h5">{handleError(error?.response?.status)}</Typography>
            </Grid>
            <Grid item>
                <Lottie
                    options={defaultOptions}
                    height={200}
                    width={200}
                />
            </Grid>
        </Grid>
    )
}

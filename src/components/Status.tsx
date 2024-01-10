import { FC } from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { StatusCharacter } from "../interfaces";
import { getCharacterStatusColor } from "../helpers";

interface Props {
    status: StatusCharacter;
}

const StatusBadge = styled.div<Props>`
    text-align: center;
    background-color: ${(props) => getCharacterStatusColor(props.status) };
    position: absolute;
    align-self: end;
    margin-top: 16px;
    margin-right: 16px;
    padding: 6px;
    border-radius: 4px;
`;

export const Status: FC<Props> = ({ status }) => {
    return (
        <StatusBadge status={status} aria-label="container-status">
            <Typography color="white" fontSize={12} fontWeight={900}>{status}</Typography>
        </StatusBadge>
    )
}

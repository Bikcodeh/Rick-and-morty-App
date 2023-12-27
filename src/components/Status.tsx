import { FC } from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { StatusCharacter } from "../interfaces";

interface Props {
    status: StatusCharacter;
}

const StatusBadge = styled.div<Props>`
    text-align: center;
    background-color: ${(props) => {
        switch (props.status) {
            case StatusCharacter.DEAD:
                return 'red';
            case StatusCharacter.ALIVE:
                return 'green';
            case StatusCharacter.UNKNOWN:
                return 'gray';
            default:
                return 'lightgray';
        }
    }};
    position: absolute;
    align-self: end;
    margin-top: 16px;
    margin-right: 16px;
    padding: 6px;
    border-radius: 4px;
`;

export const Status: FC<Props> = ({ status }) => {
    console.log(status)
    return (
        <StatusBadge status={status}>
            <Typography color="white" fontSize={12} fontWeight={900}>{status}</Typography>
        </StatusBadge>
    )
}

import { FC } from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

interface Props {
    text: string;
    status: boolean;
}

interface StatusBadgeProps {
    status: boolean;
}

const StatusBadge = styled.div<StatusBadgeProps>`
    text-align: center;
    background-color: ${(props) => props.status ? 'blue' : 'red'};
    position: absolute;
    align-self: end;
    margin-top: 16px;
    margin-right: 16px;
    padding: 6px;
    border-radius: 4px;
`;

export const Status: FC<Props> = ({ text, status }) => {
    return (
        <StatusBadge status={status}>
            <Typography fontSize={12} fontWeight={900}>{text}</Typography>
        </StatusBadge>
    )
}

import { StatusCharacter } from "../interfaces";

export const getCharacterStatusColor = (status: StatusCharacter): string => {
    switch (status) {
        case StatusCharacter.DEAD:
            return 'red';
        case StatusCharacter.ALIVE:
            return 'green';
        case StatusCharacter.UNKNOWN:
            return 'gray';
        default:
            return 'lightgray';
    }
}
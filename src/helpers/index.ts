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

export const handleError = (errorCode: number | undefined): string => {
    const code = errorCode || 0;
    switch (code) {
        case 400:
            return 'Error: Bad request. Check the parameters of the request.';
        case 401:
            return 'Error: Unauthorized. You need to log in to access this functionality.';
        case 403:
            return 'Error: Forbidden. You do not have permission to access this functionality.';
        case 404:
            return 'Resource not found.';
        case 500:
            return 'Internal server error. Please try again later.';
        default:
            return `Unknown error. Status code: ${code}`;
    }
}
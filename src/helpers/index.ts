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
            return 'Error: Solicitud incorrecta. Verifica los parámetros de la solicitud.';
        case 401:
            return 'Error: No autorizado. Debes iniciar sesión para acceder a esta funcionalidad.';
        case 403:
            return 'Error: Prohibido. No tienes permisos para acceder a esta funcionalidad.';
        case 404:
            return 'Personaje no encontrado.';
        case 500:
            return 'Error interno del servidor. Por favor, intenta nuevamente más tarde.';
        default:
            return `Error desconocido. Código de estado: ${errorCode}`;
    }
}
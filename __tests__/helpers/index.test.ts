import { StatusCharacter } from '../../src/interfaces';
import { getCharacterStatusColor, handleError } from './../../src/helpers/index';
describe('Tests for Helpers', () => { 
    test('getCharacterStatusColor should return green when alive status ', () => { 
        const color = getCharacterStatusColor(StatusCharacter.ALIVE);
        expect(color).toBe('green');
     });
     test('getCharacterStatusColor should return red when dead status ', () => { 
        const color = getCharacterStatusColor(StatusCharacter.DEAD);
        expect(color).toBe('red');
     });
     test('getCharacterStatusColor should return gray when unknown status ', () => { 
        const color = getCharacterStatusColor(StatusCharacter.UNKNOWN);
        expect(color).toBe('gray');
     });

     test('getCharacterStatusColor should return gray when color not match with anyone status ', () => { 
        const color = getCharacterStatusColor('test' as StatusCharacter);
        expect(color).toBe('lightgray');
     });

     test('handleError should handle and return message when error is 400', () => { 
        const message = handleError(400);
        expect(message).toBe('Error: Bad request. Check the parameters of the request.');
      });

      test('handleError should handle and return message when error is 401', () => { 
        const message = handleError(401);
        expect(message).toBe('Error: Unauthorized. You need to log in to access this functionality.');
      });

      test('handleError should handle and return message when error is 403', () => { 
        const message = handleError(403);
        expect(message).toBe('Error: Forbidden. You do not have permission to access this functionality.');
      });

      test('handleError should handle and return message when error is 404', () => { 
        const message = handleError(404);
        expect(message).toBe('Character not found.');
      });

      test('handleError should handle and return message when error is 500', () => { 
        const message = handleError(500);
        expect(message).toBe('Internal server error. Please try again later.');
      });

      test('handleError should handle and return message when error is unknown', () => { 
        const message = handleError(501);
        expect(message).toBe('Unknown error. Status code: 501');
      });

      test('handleError should handle and return message when error is undefined', () => { 
        const message = handleError(undefined);
        expect(message).toBe('Unknown error. Status code: 0');
      });
 });
import { checkInput } from '../check-input';

describe(
    'input validation function',
    () => {
        test(
            'checkInput should return true if input contains either www or https and otherwise return false',
            () => {
                const input = 'www';
                const output = [];
                expect(checkInput('www')).toBeTruthy();
                expect(checkInput('http')).toBeTruthy();
                expect(checkInput('anything else')).toBeFalsy();
            }
            );
    });
import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            idToken: null,
            userId: null,
            error: null,
            loading: false
        })
    });

    it('should store the token upon login', () => {
        expect(reducer(undefined, {
            type: actionTypes.AUTH_SUCCESS,
            idToken: 'test',
            userId: 'test'
        })).toEqual({
            idToken: 'test',
            userId: 'test',
            error: null,
            loading: false
        })
    });
});
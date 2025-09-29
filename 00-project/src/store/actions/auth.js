import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
};

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    localStorage.removeItem('idToken');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');

    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(function() {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}

export const auth = (email, password, isSignup) => {
    return dispatch => {
        console.log(email);
        console.log(password);

        dispatch(authStart());

        // We can use this with axios
        let url = "";
        if (isSignup) {
            url = "";
        }

        // Simulating axios call
        setTimeout(function() {
            const data = {
                email: email,
                expiresIn: "3600",
                idToken: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiZW1haWwiOiJqb2huQGV4YW1wbGUuY29tIiwiaWF0IjoxNjk1ODAwMDAwLCJleHAiOjE3MjcwMjY0MDB9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
                userId: "123",
                refreshToken: "rtok_4f9d7a8b2c6e1f23a9b7c3d5e6f8a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f"
            }
            
            // save it because user can reload the page
            localStorage.setItem('idToken', data.idToken);
            localStorage.setItem('expirationDate', new Date(new Date().getTime() + data.expiresIn * 1000))
            localStorage.setItem('userId', data.userId)

            dispatch(authSuccess(data));
            dispatch(checkAuthTimeout(data.expiresIn));
        }, 5000);
    }
}

export const authCheckState = () => {
    return dispatch => {
        const idToken = localStorage.getItem('idToken');
        if (!idToken) {
            dispatch(logout())
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <  new Date()) {
                dispatch(logout())
            } else {
                const userId = localStorage.getItem('userId')
                const data = {
                    idToken: idToken,
                    userId: userId
                }
                dispatch(authSuccess(data))
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    }
}
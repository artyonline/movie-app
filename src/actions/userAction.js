const axios = require('axios');
const apiUrl = 'http://localhost:5000/api/'

export const signIn = (loginData) => async (dispatch) => {
    if(loginData.email != null && loginData.password != null) {
        try {
            const response = await axios.post(`${apiUrl}users/login`, {
                email: loginData.email,
                password: loginData.password
            });
            if(response.status === 200) {
                dispatch({
                    type: "SIGNIN",
                    success: true,
                    data: response.data
                });
            }
        } catch (e) {
            dispatch({
                type: "ERROR",
                data: e.response.data.msg || e
            });
        }
    }
}

export const signUp = (regData) => async (dispatch) => {
    if(regData.email != null && regData.password != null) {
        try {
            const response = await axios.post(`${apiUrl}users/register`, {
                name: regData.name,
                email: regData.email,
                password: regData.password
            });
            if(response.status === 200) {
                // Log the new user in programmatically.
                dispatch({
                    type: "SIGNIN",
                    success: true,
                    data: response.data
                });
            }
        } catch (e) {
            dispatch({
                type: "ERROR",
                data: e.response.data.msg || e
            });
        }
    }
}

export const signOut = () => dispatch => {
    dispatch({
        type: "SIGNOUT"
    });
}
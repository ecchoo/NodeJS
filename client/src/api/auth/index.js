import axios from 'axios'

export const login = async ({ email, password }) => {
    const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, {
        email,
        password
    })

    return data
}

export const register = async ({ name, email, password, passwordConfirm }) => {
    const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, {
        name,
        email,
        password,
        passwordConfirm
    })

    return data
}

export const logout = async (token) => {
    const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/auth/logout`, {}, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    return data
}
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

export const getUserSession = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/auth/userSession`)

    return response
}
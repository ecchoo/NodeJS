import { useSelector } from "react-redux"

export function useAuth() {
    const { user: { id, name, email, token } } = useSelector((state) => state)

    return {
        isAuth: Boolean(token),
        id,
        name, 
        email
    }
}
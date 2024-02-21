import { useSelector } from "react-redux"
import { FormRegister } from "../FormRegister"
import { FormLogin } from "../FormLogin"
import { AUTH_FORMS } from "@/constants/authForms"

export const AuthModalContent = () => {
    const { authModal: { activeForm } } = useSelector(state => state)

    switch (activeForm) {
        case AUTH_FORMS.REGISTER:
            return <FormRegister />
        case AUTH_FORMS.LOGIN:
            return <FormLogin />
    }
}
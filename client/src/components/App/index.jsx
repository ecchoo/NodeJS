import { BrowserRouter } from "react-router-dom"
import { AppRouter } from '@/components/AppRouter'
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Provider } from "react-redux"
import { store, persistor } from "@/store"
import { AuthModal } from "../AuthModal"
import './styles.css'
import { PersistGate } from "redux-persist/integration/react"
import { ModalCreateProduct } from "../ModalCreateProduct"
import { ModalUpdateProduct } from "../ModalUpdateProduct"
import { ModalConfirmDeleteProduct } from "../ModalConfirmDeleteProduct"
import { ModalCreateCategory } from "../ModalCreateCategory"
import { ModalUpdateCategory } from "../ModalUpdateCategory"
import { ModalConfirmDeleteCategory } from "../ModalConfirmDeleteCategory"

export const App = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <BrowserRouter>
                    <AuthModal />

                    <ModalCreateProduct />
                    <ModalUpdateProduct />
                    <ModalConfirmDeleteProduct />        

                    <ModalCreateCategory />
                    <ModalUpdateCategory />
                    <ModalConfirmDeleteCategory />

                    <Header />
                    <AppRouter>
                        
                    </AppRouter>
                    <Footer />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    )
}
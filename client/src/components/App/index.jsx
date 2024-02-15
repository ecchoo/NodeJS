import { BrowserRouter } from "react-router-dom"
import { AppRouter } from '@/components/AppRouter'
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import './app.css'
import { Provider } from "react-redux"
import { store } from "@/store"

export const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <AppRouter>

                </AppRouter>
                <Footer />
            </BrowserRouter>
        </Provider>
    )
}
import { BrowserRouter } from "react-router-dom"
import { AppRouter } from '@/components/AppRouter'
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import './app.css'

export const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <AppRouter>

            </AppRouter>
            <Footer />
        </BrowserRouter>
    )
}
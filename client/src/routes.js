import { Home } from '@/pages/Home'
import { Menu } from '@/pages/Menu'
import { Profile } from '@/pages/Profile'
import { ADMIN, BASKET, HOME, MENU, PROFILE } from "./constants/routes";
import { Basket } from '@/pages/Basket';
import { Admin } from './pages/Admin';

export const routes = [
    {
        path: HOME,
        Component: Home
    },
    {
        path: MENU,
        Component: Menu
    },
    {
        path: BASKET,
        Component: Basket
    },
    {
        path: PROFILE,
        Component: Profile
    },
    {
        path: ADMIN,
        Component: Admin
    }
]
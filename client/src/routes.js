import { Home } from '@/pages/Home'
import { Menu } from '@/pages/Menu'
import { Profile } from '@/pages/Profile'
import { BASKET, HOME, MENU, PROFILE } from "./constants/routes";
import { Basket } from '@/pages/Basket';

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
]
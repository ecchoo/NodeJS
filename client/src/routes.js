import { Home } from '@/pages/Home'
import { Menu } from '@/pages/Menu'
import { Profile } from '@/pages/Profile'
import { HOME, MENU, PROFILE } from "./constants/routes";

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
        path: PROFILE,
        Component: Profile
    },
]
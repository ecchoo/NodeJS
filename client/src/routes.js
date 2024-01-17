import { Home, Menu, Profile } from "./pages";
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
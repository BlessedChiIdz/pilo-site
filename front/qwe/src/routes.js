import {
    ADMIN_ROUTE,
    BASKET_ROUTE,
    DEVICE_ROUTE,
    LOGIN_ROUTE,
    MAIN_PAGE_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE
} from "./utils/consts";
import Shop from "./pages/shop";
import Auth from "./pages/auth";
import DevicePage from "./pages/DevicePage";
import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import Main from "./pages/Main"
export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        element: <Admin/>
    },
    {
        path: BASKET_ROUTE,
        element: <Basket/>
    },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        element: <Shop/>
    },
    {
        path: MAIN_PAGE_ROUTE,
        element: <Main/>
    },
    {
        path: LOGIN_ROUTE,
        element: <Auth/>
    },
    {
        path: REGISTRATION_ROUTE,
        element: <Auth/>
    },
    {
        path: DEVICE_ROUTE + '/:id',
        element: <DevicePage/>
    },
]
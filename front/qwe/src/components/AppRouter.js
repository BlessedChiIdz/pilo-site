import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {authRoutes,publicRoutes} from "../routes";

const AppRouter = () => {
    const isAuth = false
    return (
        <Routes>
            {isAuth===true && authRoutes.map(({path,element}) =>
                <Route key={path} path={path} element={element} exact></Route>
            )}
            {publicRoutes.map(({path,element}) =>
                <Route key={path} path={path} element={element} exact></Route>
            )}
        </Routes>
    );
};

export default AppRouter;
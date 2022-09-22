import React, {useContext} from 'react';
import {Navigate,Routes, Route ,Redirect} from 'react-router-dom'
import {authRoutes,publicRoutes} from "../routes";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context)

    console.log(user)
    return (
        <Routes>
            {user.isAuth===true && authRoutes.map(({path,element}) =>
                <Route key={path} path={path} element={element} exact/>
            )}
            {publicRoutes.map(({path,element}) =>
                <Route key={path} path={path} element={element} exact/>
            )}
            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />
        </Routes>
    );
};

export default AppRouter;
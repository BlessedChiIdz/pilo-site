import React, {useContext, useEffect, useMemo, useState} from "react";
import{BrowserRouter} from 'react-router-dom'
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";
import "./buttons.css"
const App = observer(() =>{
    let qwe = document.cookie;
    let zxc = qwe.slice("=")
    const{user} = useContext(Context)
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        check().then(data=>{
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(()=>setLoading(false))
    },[])

    if(loading){
        return <Spinner animation={"grow"}/>
    }
  return(
      <BrowserRouter>
          <NavBar></NavBar>
          <AppRouter />
      </BrowserRouter>

  );
});
export default App;
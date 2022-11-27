import React, {useContext, useEffect, useState} from "react";
import{BrowserRouter} from 'react-router-dom'
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";
import {createBasket} from "./http/DeviceAPI";
import axios from "axios";
import "./buttons.css"
const App = observer(() =>{
    const{user} = useContext(Context)
    const [loading, setLoading] = useState(true)
    //const {device} = useContext(Context)
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
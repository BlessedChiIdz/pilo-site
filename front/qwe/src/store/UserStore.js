import {makeAutoObservable} from "mobx";

export default class userStore{
    constructor() {
        this._cookieAlert = true
        this._isAuth=false
        this._user = {}
        this._OneItem ={}
        makeAutoObservable(this)
    }
    setCookieAlert(bool){
        this._cookieAlert = bool
    }
    setIsAuth(bool){
        this._isAuth = bool
    }
    setUser(user){
        this._user = user
    }
    get cookieAlert(){
        return this._cookieAlert
    }
    get isAuth(){
        return this._isAuth
    }
    get user(){
        return this._user
    }
    setItem(props){
        this._OneItem = props
    }
    get Item(){
        return this._OneItem
    }
}
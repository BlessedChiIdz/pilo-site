import {makeAutoObservable} from "mobx";

export default class BasketStore {
    constructor() {
        this._Baskets = []
        makeAutoObservable(this)
    }
    setBaskets (props){
        this._Baskets=props
    }
    get Baskets(){
        return this._Baskets
    }

}
import {makeAutoObservable} from "mobx";

export default class BasketStore {
    constructor() {
        this._BasketsforCount = []
        this._BasketsforBasket = []
        makeAutoObservable(this)
    }
    setBasketsForCount (props){
        this._BasketsforCount=props
    }
    get BasketsForCount(){
        return this._BasketsforCount
    }
    setBasketsForBasket (props){
        this._BasketsforBasket=props
    }
    get BasketsForBasket(){
        return this._BasketsforBasket
    }

}
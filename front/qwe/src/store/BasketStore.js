import {makeAutoObservable} from "mobx";

export default class BasketStore {
    constructor() {
        this._BasketsforCount = []
        this._BasketsforBasket = []
        this._OneItem ={}
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
    setItem(props){
        this._OneItem= props
    }
    get Item(){
     return this._OneItem
    }
}
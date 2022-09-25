import {makeAutoObservable} from "mobx";

export default class DeviceStore{
    constructor() {
        this._types = []
        this._device=[]
        this._selectedType = {}
        makeAutoObservable(this)
    }
    setTypes(types){
        this._types=types
    }
    setDevices(devices){
        this._device = devices
    }
    setSelectedType(type){
        this._selectedType = type
    }
    get types(){
        return this._types
    }
    get devices(){
        return this._device
    }
    get selectedType(){
        return this._selectedType
    }
}
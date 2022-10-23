import {makeAutoObservable} from "mobx";

export default class DeviceStore{
    constructor() {
        this._types = []
        this._device=[]
        this._deviceLists = []
        this._selectedType = {}
        this._selectedDevice = {}
        this._deviceBasket = {}
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
    setSelectedDevice(device){
        this._selectedDevice = device
    }
    setDeviceList(deviceList){
        this._deviceLists=deviceList
    }
    setDeviceBasket(DeviceBasket){
        this._deviceBasket = DeviceBasket
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
    get selectedDevice(){
        return this._selectedDevice
    }
    get DeviceList(){
        return this._deviceLists
    }
    get DeviceBasket(){
        return this._deviceBasket
    }

}
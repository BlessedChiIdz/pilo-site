import {makeAutoObservable} from "mobx";

export default class DeviceStore{
    constructor() {
        this._count = 1
        this._basketPodDevices = {}
        this._types = []
        this._device=[]
        this._deviceLists = []
        this._basketDevices = []
        this._selectedType = {}
        this._selectedDevice = {}
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
    setBasketDevices(basketDevice){
        this._basketDevices = basketDevice
    }
    setCount(){
        this._count = this._count + 1
    }
    setBasketPodDevices(BasketPodDevices){
        this._basketPodDevices = BasketPodDevices
    }
    get BasketPodDevices(){
        return this._basketPodDevices
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
    get BasketDevices(){
        return this._basketDevices
    }
    get Count(){
        return this._count
    }

}
import {makeAutoObservable} from "mobx";

export default class DeviceStore{
    constructor() {
        this._types = []
        this._device=[]
        this._deviceLists = [
            {id:1,name:"test",price: 1000,deviceId:9},
            {id:2,name:"test_2",price: 1000,deviceId:9},
        ]
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
}
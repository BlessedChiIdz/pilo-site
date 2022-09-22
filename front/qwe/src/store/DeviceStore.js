import {makeAutoObservable} from "mobx";

export default class DeviceStore{
    constructor() {
        this._types = [
            {id:1,name:"Brus"},
            {id:2, name:"Cherepica"}
        ]
        this._device=[
            {id: 9, name: "ttest 12", price: 1000, img: "a16f5bfa-c59a-4471-9254-e954c55d9a0a.jpg",typeId: 2}
        ]
        makeAutoObservable(this)
    }
    setTypes(types){
        this._types=types
    }
    setDevices(devices){
        this._device = devices
    }

    get types(){
        return this._types
    }
    get devices(){
        return this._device
    }
}
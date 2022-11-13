import {$authHost, $host} from "./index";

export const createType = async (type) =>{
    const {data} = await $authHost.post('api/type',type)
    return data
}
export const fetchTypes = async () =>{
    const {data} = await $host.get('api/type')
    return data
}
export const createDevice = async (device) =>{
    const {data} = await $authHost.post('api/device',device)
    return data
}
export const fetchDevices = async (typeId) =>{
    const {data} = await $host.get('api/device',{params:{
        typeId
        }})
    return data
}
export const fetchOneDevices = async (id) =>{
    const {data} = await $host.get('api/device/' + id)
    return data
}
export const CreateDeviceList = async (deviceList) =>{
    const {data} = await $authHost.post('api/deviceList',deviceList)
    return data
}
export const fetchDeviceList = async (deviceId) =>{
    const {data} = await $host.get('api/deviceList',{params:{
        deviceId
    }})
    return data
}
export const fetchOneDeviceList = async (id) =>{
    const {data} = await $host.get('api/deviceList/getById',{params:{
            id
        }})
    return data
}
export const addBasketDevice = async (Count) =>{
    const {data} = await $host.post('api/basketDevice/add', Count)
    return data
}
export const CheckBasketId = async () =>{
    const {data} = await $host.get('api/basket/check')
    return data
}
export const getBasketId = async (id_forCookie) =>{
    const {data} = await $host.get('api/basket/get',{params:{
            id_forCookie
        }})
    return data
}
export const getBasketDevices = async (id_forCookie) =>{
    const {data} = await $host.get('api/basketDevice/expGet',{params:{
            id_forCookie
        }})
    return data
    }
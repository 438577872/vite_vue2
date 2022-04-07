import Axios, {AxiosRequestConfig} from 'axios'
import {Response} from "./request.types";

const v1 = Axios.create({
    baseURL: "/api/v1"
})


v1.interceptors.request.use(conf => {
    return conf
})


async function request(conf: AxiosRequestConfig) {
    const {data, code, msg} = await v1(conf) as any as Response
    if (code == 200) {
        return data
    }

    return new Error(msg || "Some Error!")
}

export {request as v1}

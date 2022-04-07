interface Response<T = any> {
    code: number
    data: T,
    msg: string
}


type HttpResponse<T> = Promise<Response<T>>


export {HttpResponse,Response}

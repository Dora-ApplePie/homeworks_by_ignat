import axios from 'axios';

export type ResponseInfoType = {
    errorText: string
    info: string
    yourBody: { success: boolean }
    yourQuery: {}
}

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/'
})

export const requestApi = {
    sendValue: (data: { success: boolean }) => {
        return instance.post<ResponseInfoType>('auth/test', data)
            .then(res => res.data)
            .catch(err => err.response.data)
    }
}

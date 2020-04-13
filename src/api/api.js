import * as axios from "axios";

const instanceAxios = axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{'API-KEY': 'b47d24ed-5585-4d05-a64d-d6afc469e229'}


});



export const API = {
    getUsers :  (page = 1,pageSize = 10) => {
        return instanceAxios.get(`users?page=${page}&count=${pageSize}`)
            .then(response => response.data)
    },

    follow: (id) => {
        return instanceAxios.post(`follow/${id}`)
            .then(response => response.data)
    },

    unfollow: (id) => {
        return instanceAxios.delete(`follow/${id}`)
            .then(response => response.data)
    },
    authMe: () => {
        return instanceAxios.get('auth/me')
            .then(response => response.data)
    },

    profile: (id) => {
        return instanceAxios.get(`profile/${id}`)
            .then(response => response.data)
    }
}


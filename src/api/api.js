import * as axios from "axios";

const instanceAxios = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': 'b47d24ed-5585-4d05-a64d-d6afc469e229'}


});


export const API = {
    getUsers: (page = 1, pageSize = 10) => {
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



}


export const ProfileAPI = {

    profile: (id) => {
        return instanceAxios.get(`profile/${id}`)
            .then(response => response.data)
    },

    getProfileStatus: (id) => {
        return instanceAxios.get(`profile/status/${id}`)
            .then(response => response.data)
    },

    setProfileStatus: (status) => {
        return instanceAxios.put(`profile/status`, {status})
            .then(response => response.data)
    }
}


export const AuthAPI = {
    authMe: () => {
        return instanceAxios.get('auth/me')
            .then(response => response.data)
    },

    loginMe: (email,password,rememberMe,captcha) => {
        return instanceAxios.post('auth/login',{email,password,rememberMe,captcha})
            .then(response => response.data)
    },

    logOutMe: () => {
        return instanceAxios.delete('auth/login')
            .then(response => response.data)
    }
}


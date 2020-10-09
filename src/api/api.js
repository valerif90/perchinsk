import axios from 'axios';

const instance = axios.create({
    //withCredentials: true
    baseURL: 'http://localhost:4000/'
});

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe });
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}
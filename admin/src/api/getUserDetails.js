import axios from 'axios'
import { API } from '../constants'

export const getUserDetails = (email) => {
    const data = axios.get(`${API}/user/${email}`, {
        headers: {
            token: localStorage.getItem('admin_token')
        }
    }).then((res) => {
        return res
    })

    return data
}
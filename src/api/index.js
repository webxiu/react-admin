import axios from '../axios'
// post
export const reqLogin = (data) => axios.ajax({ url: '/api/login.php', method: 'post', data })

// get
export const reqRole = (data) => axios.ajax({ url: '/api/role.php', method: 'get', params: data })
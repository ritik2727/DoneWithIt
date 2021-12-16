import apiClient from "./Client"

const login = (email,password) =>apiClient.post('/auth',{
    email,password
})

export default {
    login
}
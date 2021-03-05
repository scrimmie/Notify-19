import axios from 'axios';

//const { data, error } = useSwr('/api/user/createUser', fetcher)

export const createUser = (user) => {
    return axios.post('/api/user/createUser', {
            name: user.name,
            email: user.email,
            dob: user.dob,
            password: user.password
        })
}

export const loginUser = (email, password) => {
    return axios.post('/api/user/loginUser', {
            email: email,
            password: password
        })
}


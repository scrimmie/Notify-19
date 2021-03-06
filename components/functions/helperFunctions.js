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

export const logData = (email, log, date, tested) => {
    return axios.post('/api/user/logData', {
            id: email,
            log: log,
            date: date,
            tested: tested
        })
}

export const getAlerts = (email) => {
    return axios.post('/api/user/getAlerts', {
            email: email
        })
}


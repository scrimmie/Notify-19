import { useState } from 'react'
import isEmail from 'validator/lib/isEmail';
import { useRouter } from 'next/router' 
import { createUser } from '../components/functions/helperFunctions'


//fetcher funtion for swr
// const fetcher = (url) => fetch(url).then((res) => res.json())

//calls api for create user
//  const { data, error } = useSwr('/api/users', fetcher)



export default function SignUp({ handleClick }) {
    const router = useRouter()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [DOB, setDOB] = useState("")
    const [pass, setPass] = useState("")
    const [rePass, setrePass] = useState("")


    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)

    const getTodaysDate = () => {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
    
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        today = yyyy + '-' + mm + '-' + dd;
        return today;
    }

    const showLogin = () => {
        handleClick()
    }

    const throwErr = (message) => {
        setErrorMessage(message)
        setError(true)
    }

    const SignUp = () => {
        if(pass != rePass){
            throwErr("passwords do not match")
        }else if(!isEmail(email)){
            throwErr("invalid email address")
        }else{
            createUser({
                name: name,
                email: email,
                dob: DOB,
                password: pass
            }).then((res) => {
                setError(false)
                router.push('/dashboard')
            }) 
        }
    }


    return (
        <>
            <div className="mb-3 pt-0 w-9/12">
                <input type="text" placeholder="Name" onChange={ (e) => setName(e.target.value) } value={ name } className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" />
            </div>
            <div className="mb-3 pt-0 w-9/12">
                <input type="email" placeholder="Email" onChange={ (e) => setEmail(e.target.value) } value={ email } className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" />
            </div>
            <div className="mb-3 pt-0 w-9/12">
                <input type="date" placeholder="Birthday" onChange={ (e) => setDOB(e.target.value) } value={ DOB } max={getTodaysDate()} className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" />
            </div>
            <div className="mb-3 pt-0 w-9/12">
                <input type="password" placeholder="Password" onChange={ (e) => setPass(e.target.value) } value={ pass } className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" />
            </div>
            <div className="mb-3 pt-0 w-9/12">
                <input type="password" placeholder="Re-Enter Password" onChange={ (e) => setrePass(e.target.value) } value={ rePass } className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" />
            </div>
            <button onClick={SignUp} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-28 md:w-32 lg:w-48">
                SignUp
            </button>
            {error ?
            <p className="text-red-600 pt-5">{errorMessage}</p>:
            null
            }
            <div className="pt-5" ></div>
            <button className="text-blue-500 background-transparent font-bold underline px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1" type="button" style={{ transition: "all .15s ease" }} onClick={showLogin}>
                Back To Login
            </button>
        </>
    )
}
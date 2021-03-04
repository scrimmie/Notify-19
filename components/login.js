import isEmail from 'validator/lib/isEmail';
import { useState } from 'react'
import { useRouter } from 'next/router'   


export default function Login({ handleClick }) {
    const router = useRouter()

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)

    const showSignUp = () => {
        handleClick()
    }

    const throwErr = (message) => {
        setErrorMessage(message)
        setError(true)
    }

    const Login = () => {
        if(!isEmail(email)){
            throwErr("invalid email address")
        }else{
            //TODO call login API
            router.push('/dashboard')
            setError(false)
        }
    }

    return (
        <>
            <div className="mb-3 pt-0 w-9/12">
                <input type="text" placeholder="Email" onChange={ (e) => setEmail(e.target.value) } value={ email } className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" />
            </div>
            <div className="mb-3 pt-0 w-9/12">
                <input type="password" placeholder="Password" onChange={ (e) => setPass(e.target.value) } value={ pass } className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" />
            </div>
            <button onClick={Login} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-28 md:w-32 lg:w-48">
                Login
            </button>
            {error ?
            <p className="text-red-600 pt-5">{errorMessage}</p>:
            null
            }
            <div className="pt-5" ></div>
            <button className="text-blue-500 background-transparent font-bold underline px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1" type="button" style={{ transition: "all .15s ease" }} onClick={showSignUp}>
                Dont have and account?
            </button>
        </>
    )
}
import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'


function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState('')
    const [error, setError] = useState('')

    const {session} = UserAuth()
    console.log(session)

    return (
        <div>
            <form className="max-w-md m-auto pt-24">
                <h2 className="font-bold pb-2">Sign up today!</h2>
                <p className="">
                    Already have an account? <Link to='/signin'>Sign in!</Link> 
                </p>

                <div className="flex flex-col py-4">
                    <input placeholder="Email" type="email" name="email" id="email" className="p-3 mt-4" />

                    <input placeholder="Password" type="password" name="password" id="password" className="p-3 mt-4" />

                    <button type="submit" disabled={loading} className="mt-4">Sign Up</button>
                </div>
            </form>        
        </div>
    )
}

export default SignUp

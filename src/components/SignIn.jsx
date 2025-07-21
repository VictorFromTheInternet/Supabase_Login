import React from 'react'
import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'


function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState('')
    const [error, setError] = useState('')

    const {session, signInUser} = UserAuth()
    const navigate = useNavigate()
    // console.log(session)


    // sign up
    const handleSignIn = async (e) =>{
        e.preventDefault()
        setLoading(true)
        try{
            const result = await signInUser(email, password)

            if(result.success){
                navigate('/dashboard')
            }
        }catch(err){
            setError("an error occured during signup")
        }finally{
            setLoading(false)
        }
    }

    return (
        <div>
            <form onSubmit={handleSignIn} className="max-w-md m-auto pt-24">
                <h2 className="font-bold pb-2">Sign in</h2>
                <p className="">
                    Don't have an account? <Link to='/signup'>Sign up!</Link> 
                </p>

                <div className="flex flex-col py-4">
                    <input onChange={(e)=>{setEmail(e.target.value)}} required placeholder="Email" type="email" name="email" id="email" className="p-3 mt-4" />

                    <input onChange={(e)=>{setPassword(e.target.value)}} required placeholder="Password" type="password" name="password" id="password" className="p-3 mt-4" />

                    <button type="submit" disabled={loading} className="mt-4">Sign in</button>

                    {error && <p className="text-red-600 text-center pt-4">{error}</p>}
                </div>
            </form>        
        </div>
    )
}

export default SignIn

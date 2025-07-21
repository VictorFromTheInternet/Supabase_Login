import React from 'react'
import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'


function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState('')
    const [error, setError] = useState('')

    const {session, signUpNewUser} = UserAuth()
    const navigate = useNavigate()
    // console.log(session)


    // sign up
    const handleSignUp = async (e) =>{
        e.preventDefault()
        setLoading(true)
        try{
            const result = await signUpNewUser(email, password)

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
            <form onSubmit={handleSignUp} className="max-w-md m-auto pt-24">
                <h2 className="font-bold pb-2">Sign up today!</h2>
                <p className="">
                    Already have an account? <Link to='/signin'>Sign in!</Link> 
                </p>

                <div className="flex flex-col py-4">
                    <input onChange={(e)=>{setEmail(e.target.value)}} required placeholder="Email" type="email" name="email" id="email" className="p-3 mt-4" />

                    <input onChange={(e)=>{setPassword(e.target.value)}} required placeholder="Password" type="password" name="password" id="password" className="p-3 mt-4" />

                    <button type="submit" disabled={loading} className="mt-4">Sign Up</button>

                    {error && <p className="text-red-600 text-center pt-4">{error}</p>}
                </div>
            </form>        
        </div>
    )
}

export default SignUp

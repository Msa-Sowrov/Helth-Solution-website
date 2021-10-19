import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
            
    const [registerd, setRegidterd] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');

    const {error, user, createAccount, signInWithEmail, signInWithGoogle} = useAuth();

    const toggleLogin = e =>{
            setRegidterd(e.target.checked)
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }

    const handleRegister=(e)=>{
        createAccount(email, password, userName)
        e.preventDefault()
    }
    const handleLogin=(e)=>{
        signInWithEmail(email, password)
        e.preventDefault()
    }
    const handleName =(e)=>{
        setUserName(e.target.value)

    }

    return (
        <div className='container'>
        <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-6 col-12">
            <form>
                {
                    registerd?
                    <h1 className="text-primary">Login</h1>:
                    <h1 className="text-primary">Please Register</h1>

                }
                {
                    !registerd && <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input onBlur={handleName} type="text" className="form-control" />
                </div>
                }
            
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input onBlur={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input onBlur={handlePassword} type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 form-check">
                <input onChange={toggleLogin} type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Already Registerd?</label>
            </div>
            <p className="text-danger">{error}</p>
            {
                registerd?
                <button onClick={handleLogin}  className="btn btn-primary">Login</button>:
                <button onClick={handleRegister}  className="btn btn-primary">Register</button>

            }
            </form>
            <span>or</span>
            <br/>
            <button className="btn btn-success" onClick={signInWithGoogle}> SignIn With Google</button>
        </div>
            <div className="col-md-6 col-12">
                <img className="img-fluid" src="https://i.ibb.co/NyJzJkz/Online-Registration-Illustration-vector-concept-generated.png" alt="" />
            </div>
            </div>
        </div>
    );
};

export default Login;
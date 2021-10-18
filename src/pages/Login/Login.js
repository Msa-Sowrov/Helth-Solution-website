import React, { useState } from 'react';
import Header from '../Home/Header/Header';

const Login = () => {
            
    const [registerd, setRegidterd] = useState('')




    const toggleLogin = e =>{
            setRegidterd(e.target.checked)
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
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            <div class="mb-3 form-check">
                <input onChange={toggleLogin} type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Already Registerd?</label>
            </div>
            {
                registerd?
                <button type="submit" class="btn btn-primary">Login</button>:
                <button type="submit" class="btn btn-primary">Register</button>

            }
            </form>
        </div>
            <div className="col-md-6 col-12">
                <img className="img-fluid" src="https://i.ibb.co/NyJzJkz/Online-Registration-Illustration-vector-concept-generated.png" alt="" />
            </div>
            </div>
        </div>
    );
};

export default Login;
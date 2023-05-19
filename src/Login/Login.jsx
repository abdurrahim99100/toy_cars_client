import React, { useContext } from 'react';
import Img from '../assets/login/login.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../Provider/AuthProvider';
import { FaFacebook, FaGoogle, FaLinkedinIn } from "react-icons/fa";

const Login = () => {

    // const { signIn, googleSignIn } = useContext(AuthContext);
    // const location = useLocation();
    // const navigate = useNavigate();


    // const from = location.state?.from?.pathname || "/";

    // const handleSubmit = event => {
    //     event.preventDefault();
    //     const form = event.target;

    //     const email = form.email.value;
    //     const password = form.password.value;

    //     signIn(email, password)
    //         .then(result => {
    //             const user = result.user;
                
    //             console.log(loggedUser);
    //             navigate(from, {replace: true});
                
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // };

    // Google singIn;
    
    // const handleGoogleSignIn = () => {
    //     googleSignIn()
    //         .then(res => {
    //             if(res._tokenResponse.email){
    //                 navigate(from)
    //             }
    //             console.log(res)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row gap-20">
                <div className="text-center lg:text-left">
                    <img src={Img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl text-center font-bold mt-4">Login</h1>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" name='password' className="input input-bordered" />
                            <div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className='mb-10'>
                        <h3 className='text-center mt-5'>Or Sign Up With</h3>
                        <div className='flex gap-4 justify-center my-5'>
                            <button>
                                <FaFacebook />
                            </button>
                            <button >
                                <FaGoogle />
                            </button>
                            <button>
                                <FaLinkedinIn />
                            </button>
                        </div>
                        <div className='text-center'>
                            <Link to='/signup'>
                                Create new account? <span className='text-orange-500'>Sign Up</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
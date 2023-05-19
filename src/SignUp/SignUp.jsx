import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Img from '../assets/login/login.svg';
// import { AuthContext } from '../../Provider/AuthProvider';
import { FaFacebook, FaGoogle, FaLinkedinIn } from "react-icons/fa";

const SignUp = () => {
    // const { createUser } = useContext(AuthContext);


    // const handleSignUp = event => {
    //     event.preventDefault();
    //     const form = event.target;

    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const password = form.password.value;

    //     createUser(email, password)
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user)
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
                    <h1 className="text-3xl text-center font-bold mt-5">Sign Up</h1>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phot URL</span>
                            </label>
                            <input type="text" placeholder="Photo-url" name='photo' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" />
                        </div>
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
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <div className='mb-10'>
                        <h3 className='text-center'>Or Sign Up With</h3>
                        <div className='flex gap-4 justify-center my-5'>
                            <button>
                                <FaFacebook />
                            </button>
                            <button>
                                <FaGoogle />
                            </button>
                            <button>
                                <FaLinkedinIn />
                            </button>
                        </div>
                        <div className='text-center'>
                            <Link to="/login">Already have an account? <span className='text-orange-500'>Login</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SignUp;
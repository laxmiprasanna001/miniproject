import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom';
// import { doCreateUserWithEmailAndPassword } from '../../firebase/auth';
import { signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { doSignInWithGoogle } from '../../firebase/auth';
const Login = () => {
    const Navigate=useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [isRegistering,setIsRegistering]=useState(false);
    const [errorMessage,setErrorMessage]=useState('');

    const onGoogleSignIn=(e)=>{
        e.preventDefault();
        doSignInWithGoogle().catch((error)=>{
          console.log(error);
      })
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
          const userCredential=await signInWithEmailAndPassword(auth,email,password);
          console.log(userCredential);
          const user=userCredential.user;
          localStorage.setItem('token',user.accessToken);
          localStorage.setItem('user',JSON.stringify(user));
          Navigate('/');
          location.reload();
        }
        catch(error){
          toast('Invalid credentials');
          setErrorMessage(error.message);
        }
      }


      return (
           <section className="h-screen mx-24">
      <div className="h-full mx-15">
        {/* <!-- Left column container with background--> */}
        <div
          className="flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div
            className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image" />
          </div>
    
          {/* <!-- Right column container --> */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form onSubmit={handleSubmit}>
              {/* <!--Sign in section--> */}
              <div
                className="flex flex-row items-center justify-center lg:justify-start">
                <p className="mb-0 me-4 text-lg">Sign in with</p>
    
    
                {/* <!-- X --> */}
                <button
                  type="submit"
                  onSubmit={onGoogleSignIn}
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                  className=" mx-1 inline-block h-9 w-9 rounded-full bg-blue fill-white p-2 uppercase leading-normal shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                  {/* <!-- X --> */}
                  <span className="[&>svg]:mx-auto [&>svg]:h-3.5 [&>svg]:w-3.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512">
                      {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
                      <path
                        d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                    </svg>
                  </span>
                </button>
    
              </div>
    
              {/* <!-- Separator between social media sign in and email/password sign in --> */}
              <div
                className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                <p
                  className="mx-4 mb-0 text-center font-semibold dark:text-black">
                  Or
                </p>
              </div>
    
              {/* <!-- Email input --> */}
              
              <div className="relative mb-3" data-twe-input-wrapper-init>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}    
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-black transition-all duration-200 ease-linear focus:placeholder:opacity-0 peer-focus:text-black data-[twe-input-state-active]:placeholder:opacity-0 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-50 dark:autofill:shadow-autofill dark:peer-focus:text-black [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput1"
                placeholder="Email Address" />
              <label
                htmlFor="exampleFormControlInput1"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.5rem] peer-focus:scale-[0.8] peer-focus:text-black peer-data-[twe-input-state-active]:-translate-y-[1.5rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-100 dark:peer-focus:text-black"
                >Email address
              </label>
            </div>
    
              {/* <!-- Password input --> */}
              <div className="relative mb-6" data-twe-input-wrapper-init>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-black transition-all duration-200 ease-linear focus:placeholder:opacity-0 peer-focus:text-black data-[twe-input-state-active]:placeholder:opacity-0 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-50 dark:autofill:shadow-autofill dark:peer-focus:text-black [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput22"
                  placeholder="Password" />
                <label
                  htmlFor="exampleFormControlInput22"
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.5rem] peer-focus:scale-[0.8] peer-focus:text-black peer-data-[twe-input-state-active]:-translate-y-[1.5rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-100 dark:peer-focus:text-black"
                  >Password
                </label>
              </div>
    
            {/* <!-- confirm Password input --> */}
            {/* <div className="relative mb-6" data-twe-input-wrapper-init>
                <input
                  type="password"
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-black transition-all duration-200 ease-linear focus:placeholder:opacity-0 peer-focus:text-black data-[twe-input-state-active]:placeholder:opacity-0 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-50 dark:autofill:shadow-autofill dark:peer-focus:text-black [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput22"
                  placeholder="confirm Password" />
                <label
                  htmlFor="exampleFormControlInput22"
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.5rem] peer-focus:scale-[0.8] peer-focus:text-black peer-data-[twe-input-state-active]:-translate-y-[1.5rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-100 dark:peer-focus:text-black"
                  >Password
                </label>
              </div> */}
    
              {/* <!-- Login button --> */}
              <div className="text-center lg:text-left">
                <button
                  type="submit"
                  className="inline-block w-full rounded bg-primary px-7 pb-2 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                  data-twe-ripple-init
                  data-twe-ripple-color="light">
                  Login
                </button>
                <ToastContainer/>
    
                {/* <!-- Register link --> */}
                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                  Need an account?
                  <Link
                   to="/register"
                    className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                    >Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
      )
    }

export default Login
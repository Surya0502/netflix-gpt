import { useState } from "react";
import Header from "./Header";

const Login = () => {

    const [isSignInForm,setSignInForm]=useState(true);
    const toggleSignInForm = () => {
        setSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_small.jpg" />
            </div>
            <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
                <h1 className="font-bold text-3xl py-4 w-full">{isSignInForm? 'Sign In':'Sign Up'}</h1>
                {!isSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full border border-white rounded-lg bg-transparent"/>}
                <input type="text" placeholder="Email or mobile number" className="p-4 my-4 w-full border border-white rounded-lg bg-transparent"/>
                <input type="password" placeholder="Password" className="p-4 my-4 w-full border border-white rounded-lg bg-transparent"/>
                <button className="p-4 my-6 bg-red-600 w-full">{isSignInForm? 'Sign In':'Sign Up'}</button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? 'New to Netflix? Sign up now' : 'Already Registered! Sign In now'}</p>
            </form>
        </div>
    )
};

export default Login;
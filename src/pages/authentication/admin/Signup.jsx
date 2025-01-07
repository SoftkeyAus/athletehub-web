import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import IconImage from '../../../assets/images/icon.png';
import AuthImage from '../../../assets/images/auth-image.png';
import AuthDecoration from '../../../assets/images/auth-decoration.png';

function Signup() {
  const navigate = useNavigate();

  const [user, setUser] = useState({ 
    firstName: '', 
    lastName: '', 
    email: '', 
    phoneNumber: '', 
    password: '',
    accessRoles: '1'
  });

  const signupUser = async () => {
    try {
      await axios.post('auth/register', user);
      navigate(`/authentication/signin`);
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || 'Error while creating the user');
    }
  };

  return (
    <main className="bg-white dark:bg-slate-900">
      <div className="relative md:flex">
        {/* Content */}
        <div className="md:w-1/2">
          <div className="min-h-[100dvh] h-full flex flex-col after:flex-1">
            {/* Header */}
            <div className="flex-1">
              <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link className="block" to="/">
                  <img className="object-cover object-center w-20 h-full" src={IconImage} width="760" height="1024" alt="Authentication" />
                </Link>
              </div>
            </div>

            <div className="max-w-sm mx-auto w-full px-4 py-8">
              <h1 className="text-3xl text-slate-800 dark:text-slate-100 font-bold mb-6">Create your Account ✨</h1>
              {/* Form */}
              {/* <form> */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="firstName">
                    First Name <span className="text-rose-500">*</span>
                  </label>
                  <input id="firstName" className="form-input w-full" type="text" value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="lastName">
                    Last Name <span className="text-rose-500">*</span>
                  </label>
                  <input id="lastName" className="form-input w-full" type="text" value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="email">
                    Email <span className="text-rose-500">*</span>
                  </label>
                  <input id="email" className="form-input w-full" type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="mobile">
                    Mobile <span className="text-rose-500">*</span>
                  </label>
                  <input id="mobile" className="form-input w-full" type="mobile" value={user.phoneNumber} onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })} />
                </div>

                {/* <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="role">Your Role <span className="text-rose-500">*</span></label>
                    <select id="role" className="form-select w-full">
                      <option>Designer</option>
                      <option>Developer</option>
                      <option>Accountant</option>
                    </select>
                  </div> */}
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="password">
                    Password <span className="text-rose-500">*</span>
                  </label>
                  <input id="password" className="form-input w-full" type="password" autoComplete="on" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                </div>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div className="mr-1">
                  {/* <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="text-sm ml-2">Email me about product news.</span>
                    </label> */}
                </div>
                <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3 whitespace-nowrap" onClick={signupUser}>
                  Sign Up
                </button>
              </div>
              {/* </form> */}
              {/* Footer */}
              <div className="pt-5 mt-6 border-t border-slate-200 dark:border-slate-700">
                <div className="text-sm">
                  Have an account?{' '}
                  <Link className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" to="/authentication/signin">
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2" aria-hidden="true">
          <img className="object-cover object-center w-full h-full" src={AuthImage} width="760" height="1024" alt="Authentication" />
          <img className="absolute top-1/4 left-0 -translate-x-1/2 ml-8 hidden lg:block" src={AuthDecoration} width="218" height="224" alt="Authentication decoration" />
        </div>
      </div>
    </main>
  );
}

export default Signup;

import React from 'react';
import { Link } from 'react-router-dom';

import IconImage from '../../../assets/images/icon.png';
import AuthImage from '../../../assets/images/auth-image.png';
import AuthDecoration from '../../../assets/images/auth-decoration.png';
import LoginForm from '../_components/LoginForm';

function Signin() {

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
              <h1 className="text-3xl text-slate-800 dark:text-slate-100 font-bold mb-6">Admin Login! ✨</h1>
              {/* Form */}
              {/* <form> */}
              <LoginForm loginUserType='0' />
              <Link className="text-sm underline hover:no-underline" to="/authentication/trainer/signin">
                Trainer Login
              </Link><br />
              <Link className="text-sm underline hover:no-underline" to="/authentication/athlete/signin">
                Athlete Login
              </Link>
              {/* </form> */}
              {/* Footer */}
              <div className="pt-5 mt-6 border-t border-slate-200 dark:border-slate-700">
                <div className="text-sm">
                  Don’t you have an account?{' '}
                  <Link className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" to="/authentication/signup">
                    Sign Up
                  </Link>
                </div>
                {/* Warning */}
                {/* <div className="mt-5">
                  <div className="bg-amber-100 dark:bg-amber-400/30 text-amber-600 dark:text-amber-400 px-3 py-2 rounded">
                    <svg className="inline w-3 h-3 shrink-0 fill-current mr-2" viewBox="0 0 12 12">
                      <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                    </svg>
                    <span className="text-sm">
                      To support you during the pandemic super pro features are free until March 31st.
                    </span>
                  </div>
                </div> */}
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

export default Signin;

import React from 'react';
import { Link } from 'react-router-dom';
import IconImage from '../../../assets/images/icon.png';
import AuthImage from '../../../assets/images/auth-image.png';
import AuthDecoration from '../../../assets/images/auth-decoration.png';
import ForgotPassword from '../_components/ForgotPasswordForm';

function ForgotPasswordPage() {
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


              <div className="flex items-center justify-between mt-6">
                <div className="mr-1">
                  <ForgotPassword userType='1' />
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

export default ForgotPasswordPage;

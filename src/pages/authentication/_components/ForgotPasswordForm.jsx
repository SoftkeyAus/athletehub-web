import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { forgotPassword } from '../http';
import { toast } from 'react-toastify';

function ForgotPasswordForm({ userType }) {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: '',
    userType: userType
  });

  const onForgotPassword = async () => {
    try {
      const request = {
        email: user.email,
        password: user.password,
        userType: userType
      }
      const response = await forgotPassword(request);
      toast.success('Success..!');
      if (userType = 2)
        navigate(`/athlete/signin`);
      else if (userType = 1)
        navigate(`/trainer/signin`);
    }
    catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || 'Error while logginng in the user');
    }
  }

  return (
    <div>
      <div className="max-w-sm mx-auto w-full px-4 py-8">
        <h2 className="text-3xl text-slate-800 dark:text-slate-100 font-bold mb-4">Forgot your Password </h2>
        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email Address
            </label>
            <input id="email"
              className="form-input w-full"
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })} />
          </div>
          <div className="flex justify-end mt-6">
            <Link className='mr-3 mt-2' to={`${userType == '1' ? '/authentication/trainer/signin' : '/authentication/athlete/signin'}`} >Login</Link>
            <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white whitespace-nowrap"
              onClick={onForgotPassword}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ForgotPasswordForm;

import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SignIn } from '../http'
import { RootContext } from '../../../utils/context/RootContextProvider';

function LoginForm({ loginUserType }) {
  
  const navigate = useNavigate();
  const [user, setUser] = useState({ 
    email: '', 
    password: '', 
    loginUserType: loginUserType 
  });
  const [errors, setErrors] = useState({});  
  const { dispatch } = useContext(RootContext);

  const signin = async () => {
    try {
      const response = await SignIn(user);
      dispatch({
        type: "LOGIN",
        payload: response?.data
      })
      if (loginUserType = 2)
        navigate(`/athlete/dashboard`);
      else if (loginUserType = 1)
        navigate(`/trainer/dashboard`);
      else if (loginUserType = 0)
        navigate(`/admin`);
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || 'Error while logginng in the user');
    }
  };

  return (
    <div> <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="email">
          Email Address
        </label>
        <input id="email" className="form-input w-full" type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="password">
          Password
        </label>
        <input id="password" className="form-input w-full" type="password" autoComplete="on" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>
    </div>
      <div className="flex items-center justify-between mt-6">
        <div className="mr-1"></div>
        <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3" onClick={signin}>
          Sign In
        </button>
      </div></div>
  )
}
export default LoginForm
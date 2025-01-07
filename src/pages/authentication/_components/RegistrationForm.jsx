import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SignUp, getCountries } from '../http';

function RegistrationForm({ userType }) {
  const navigate = useNavigate();
  const [country, setCountries] = useState([]);

  const [errors, setErrors] = useState({});
  const getCountryList = async () => {
    try {
      const response = await getCountries();
      setCountries(response?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCountryList();

  }, []);

  const [user, setUser] = useState({
    firstName: '', 
    lastName: '', 
    userType, 
    email: '', 
    phoneNumber: '', 
    password: '',
    address: '', 
    city: '', 
    state: '', 
    country: '', 
    zipCode: '', 
    website: '', 
    gender: '', 
    dob: ''
  });
  const [confirmPassword, setConfirmPassword] = useState({})
  
  const signupUser = async () => {
    try {
      await SignUp(user);
      if (userType = 1)
        navigate(`/authentication/trainer/signin`);
      else if (userType = 2)
        navigate(`/authentication/athlete/signin`);
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || 'Error while creating the user');
    }
  };

  return (
    <div>
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
          <label className="block text-sm font-medium mb-1" htmlFor="phoneNumber">
            Mobile <span className="text-rose-500">*</span>
          </label>
          <input id="phoneNumber" className="form-input w-full" type="number" value={user.phoneNumber} onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })} />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="gender">
            Gender <span className="text-rose-500">*</span>
          </label>
          <select
            id="gender" className="form-select w-full" onChange={(e) => setUser({ ...user, gender: e.target.value })}>
            <option value="">-- Select Gender --</option>
            <option value="Male">Male </option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>

          </select>
        </div>
        <label className="block text-sm font-medium mb-1" htmlFor="dob">
          Date of Birth <span className="text-rose-500">*</span>
        </label>
        <DatePicker
          id="dob" className="form-select w-full"
          selected={user.dob}
          dateFormat="yyyy-MM-dd"
          placeholderText="YYYY-MM-DD"
          maxDate={new Date()}
          showYearDropdown
          showMonthDropdown
          dropdownMode="select"
          isClearable
          onChange={(e) => setUser({ ...user, dob: e.toISOString().split('T')[0] })}
          value={user.dob}
        />
        <div>

          <label className="block text-sm font-medium mb-1" htmlFor="password">
            Password <span className="text-rose-500">*</span>
          </label>
          <input id="password" className="form-input w-full" type="password" autoComplete="on" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="confirmPassword">
            Confirm Password <span className="text-rose-500">*</span>
          </label>
          <input className="form-input w-full" type="password" autoComplete="on" onChange={(e) => setConfirmPassword({ ...confirmPassword, confirmPassword: e.target.value })} />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="address">
            Address <span className="text-rose-500">*</span>
          </label>
          <textarea id="address" className="form-input w-full" cols="50" rows="3" value={user.address} onChange={(e) => setUser({ ...user, address: e.target.value })} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="city">
            City <span className="text-rose-500">*</span>
          </label>
          <input id="city" className="form-input w-full" type="text" value={user.city} onChange={(e) => setUser({ ...user, city: e.target.value })} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="state">
            State <span className="text-rose-500">*</span>
          </label>
          <input id="state" className="form-input w-full" type="text" value={user.state} onChange={(e) => setUser({ ...user, state: e.target.value })} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="country">
            Country <span className="text-rose-500">*</span>
          </label>
          <select id="country" className="form-select w-full" value={user.country} onChange={(e) => setUser({ ...user, country: e.target.value })} >
            <option value="">-- Select Country --</option>
            {country && country.map((v, key) => {
              return (
                <option value={v.countryName} key={key}>
                  {v.countryName}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="zipCode">
            Zip Code <span className="text-rose-500">*</span>
          </label>
          <input id="zipCode" className="form-input w-full" type="text" value={user.zipCode} onChange={(e) => setUser({ ...user, zipCode: e.target.value })} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="website">
            Website <span className="text-rose-500">*</span>
          </label>
          <input id="website" className="form-input w-full" type="text" value={user.website} onChange={(e) => setUser({ ...user, website: e.target.value })} />
        </div>
      </div>
      <div className="flex items-center justify-between mt-6">

        <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3 whitespace-nowrap" onClick={signupUser}>
          Sign Up
        </button>
      </div>
    </div>
  )

}
export default RegistrationForm
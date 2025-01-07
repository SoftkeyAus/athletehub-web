import { Navigate, Route, Routes } from "react-router-dom";
import Authentication from "../layouts/Authentication";
import Signin from "../pages/authentication/admin/Signin";
import Signup from "../pages/authentication/admin/Signup";
import AthleteSignin from "../pages/authentication/athlete/SignIn";
import AthleteSignUp from "../pages/authentication/athlete/SignUp";
import TrainerSignin from "../pages/authentication/trainer/SignIn";
import TrainerSignUp from "../pages/authentication/trainer/SignUp";
import AthleteForgot from "../pages/authentication/athlete/ForgotPassword";
import TrainerForgot from "../pages/authentication/trainer/ForgotPassword";
const PublicRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/authentication" element={<Authentication />}>
        <Route path="/authentication" element={<Signin />} />
        <Route path="/authentication/signin" element={<Signin />} />
        <Route path="/authentication/signup" element={<Signup />} />
        <Route path="/authentication/athlete/signin" element={<AthleteSignin />} />
        <Route path="/authentication/athlete/signup" element={<AthleteSignUp />} />
        <Route path="/authentication/trainer/signin" element={<TrainerSignin />} />        
        <Route path="/authentication/trainer/signup" element={<TrainerSignUp />} /> 
        <Route path="/authentication/athlete/forgotPassword" element={<AthleteForgot />} />    
        <Route path="/authentication/trainer/forgotPassword" element={<TrainerForgot />} />      
      </Route>
      <Route path="*" element={<Navigate to="/authentication" />} />
    </Routes>
  )
}

export default PublicRouter;
import { Navigate, Route, Routes } from "react-router-dom"
import { useContext } from "react";
import AdminLayout from '../layouts/Admin';
import AthleteLayout from '../layouts/Athlete';
import TrainerLayout from '../layouts/Trainer';
import ProductsPage from '../pages/produccts/Index';
import ProductTypesPage from '../pages/ProductTypes/Index';
import ManageProduct from '../pages/produccts/ManageProduct';
import ManageProductType from '../pages/ProductTypes/ManageProductType';
import VendorsPage from '../pages/vendors/Index';
import ManageVendor from '../pages/vendors/ManageVendor';
import TrainersPage from '../pages/Trainers/Index';
import ManageTrainer from '../pages/Trainers/ManageTrainer';
import Dashboard from '../pages/Dashboards';
import { RootContext } from "../utils/context/RootContextProvider";
import TrainingVideo from "../pages/Training";
import Subscriptions from "../pages/Subscriptions";

const PrivateRouter = () => {

  const contextText = useContext(RootContext);
  const {state:{userType, userId, isloggedIn}} = contextText;

  const unauthRedirect = () => (
    <>
      {userType == 0 && <Route path="*" element={<Navigate to="/admin" />} /> }
      {userType == 1 && <Route path="*" element={<Navigate to="/trainer/dashboard" />} /> }
      {userType == 2 && <Route path="*" element={<Navigate to="/athlete/dashboard" />} /> }
    </>
  );

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {userType == 0 && <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/products" element={<ProductsPage />} />
          <Route path="/admin/manageProduct" element={<ManageProduct />} />
          <Route path="/admin/manageProduct/:id" element={<ManageProduct />} />
          <Route path="/admin/product-types" element={<ProductTypesPage />} />
          <Route path="/admin/manage-product-types" element={<ManageProductType />} />
          <Route path="/admin/manage-product-types/:id" element={<ManageProductType />} />
          <Route path="/admin/trainingVideos" element={<TrainingVideo />} />
          <Route path="/admin/vendors" element={<VendorsPage />} />
          <Route path="/admin/manageVendor" element={<ManageVendor />} />
          <Route path="/admin/manageVendor/:id" element={<ManageVendor />} />
          <Route path="/admin/trainers" element={<TrainersPage />} />
          <Route path="/admin/manageTrainer" element={<ManageTrainer />} />
          <Route path="/admin/manageTrainer/:id" element={<ManageTrainer />} />
          <Route path="/admin/subscriptions" element={<Subscriptions />} />
        </Route>}  
        {userType == 2 && <Route path="/athlete" element={<AthleteLayout />}>
          <Route path="/athlete/dashboard" element={<Dashboard />} allowedRoles={['athlete']}  />
          <Route path="/athlete/trainingVideos" element={<TrainingVideo />} />
        </Route>}
        {userType == 1 && <Route path="/trainer" element={<TrainerLayout />}>
          <Route path="/trainer/dashboard" element={<Dashboard />} allowedRoles={['trainer']} />
          <Route path="/trainer/products" element={<ProductsPage />} />
          <Route path="/trainer/manageProduct" element={<ManageProduct />} />
          <Route path="/trainer/trainingVideos" element={<TrainingVideo />} />
        </Route>}
        {unauthRedirect()}
      </Routes>
    </>
  )
}

export default PrivateRouter;
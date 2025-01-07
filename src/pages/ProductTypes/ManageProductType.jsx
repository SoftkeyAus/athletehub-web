import { useEffect, useState } from "react";
import { createUpdateProductTyperequest, getProductTypesDetailsRequest } from "./http";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function ManageProductType() {

  const [formData, setFormData] = useState({});
  const [productTypes, setProductTypes] = useState([]);
  
  const navigate = useNavigate();
  const { id } = useParams();

  const getProductTypeDetails = async (productTypeId) => {
    const data = await getProductTypesDetailsRequest(productTypeId);
    let productTypeInfo = {
      type: data.data.type,
      description: data.data.description,
      productTypeId: data.data.productTypeId
    }
    setFormData(productTypeInfo)
    console.log(productTypeInfo)
  }
  useEffect(() => {
    console.log(id)
    if (id) {
      getProductTypeDetails(id);
    }
  }, []);


  const cleanObject = (obj) => {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v !== null && v !== undefined && v !== '' && !(typeof v === 'object' && Object.keys(v).length === 0)));
  };

  const saveProductType = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {

      let response = null;
      const payload = cleanObject({ ...formData });
      response = await createUpdateProductTyperequest(payload)
      console.log(response)
      navigate('/admin/product-types');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    
    <div className="flex h-[100dvh] overflow-hidden">
     

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">


        {/* Table */}
        <div className="bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 relative">
          <header className="px-5 py-4">
            <div>

            </div>
          </header>
          <div className="p-3">
            <form id="productTypeFormRef" noValidate onSubmit={(e) => saveProductType(e)}>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="type">
                    Type <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="type"
                    className="form-input w-full px-2 py-1"
                    type="text"
                    value={formData?.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="description">
                  description<span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="description"
                    className="form-input w-full px-2 py-1"
                    type="text"
                    value={formData?.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
                </div>
                </div>
              <div className="flex flex-wrap justify-end space-x-2 mt-3">
                <button
                  className="btn-sm border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300"
                  onClick={(e) => navigate('/admin/product-type')}>
                  Cancel
                </button>
                <button
                  className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white"
                  type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ManageProductType;
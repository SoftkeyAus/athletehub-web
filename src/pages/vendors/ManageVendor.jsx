import { useEffect, useState } from "react";
import { createUpdateVendorrequest, getVendors, getVendorDetailsRequest } from "./http";
import { useNavigate, useParams } from "react-router-dom";

function ManageVendor() {

  const [formData, setFormData] = useState({});
  const [vendors, setVendors] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();

  const getVendorsList = async () => {
    try {
      const response = await getVendors();
      setVendors(response?.data?.rows);
    } catch (error) {
      console.log(error);
    }
  };

  const getVendorDetails = async (vendorId) => {
    const data = await getVendorDetailsRequest(vendorId);
    console.log(data);
    let vendorInfo = {
      name: data.data.name,
      companyNo: data.data.companyNo,
      companyAddress: data.data.companyAddress,
      companyContact: data.data.companyContact,
      contactName: data.data.contactName,
      companyEmail: data.data.companyEmail,
      country: data.data.country,
      vendorDetails: data.data.vendorDetails,
      vendorId: data.data.vendorId
    }
    setFormData(vendorInfo)
    console.log(vendorInfo)
  }
  useEffect(() => {

    getVendorsList();
    console.log(id)
    if (id) {
      getVendorDetails(id);
    }
  }, []);


  const cleanObject = (obj) => {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v !== null && v !== undefined && v !== '' && !(typeof v === 'object' && Object.keys(v).length === 0)));
  };

  const saveVendor = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {

      let response = null;
      const payload = cleanObject({ ...formData });
      response = await createUpdateVendorrequest(payload)
      console.log(response)
      navigate('/admin/vendors');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {/* Page header */}
      <div className="sm:flex sm:justify-between sm:items-center mb-8">
        {/* Left: Title */}
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">Add vendor</h1>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 relative">
        <header className="px-5 py-4">
          <div>

          </div>
        </header>
        <div className="p-3">
          <form id="vendorFormRef" noValidate onSubmit={(e) => saveVendor(e)}>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="name">
                  Name <span className="text-rose-500">*</span>
                </label>
                <input
                  id="name"
                  className="form-input w-full px-2 py-1"
                  type="text"
                  value={formData?.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="companyNo">
                  Company No <span className="text-rose-500">*</span>
                </label>
                <input
                  id="companyNo"
                  className="form-input w-full px-2 py-1"
                  type="text"
                  value={formData?.companyNo}
                  onChange={(e) => setFormData({ ...formData, companyNo: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="companyAddress">
                  Company Address <span className="text-rose-500">*</span>
                </label>
                <input
                  id="companyAddress"
                  className="form-input w-full px-2 py-1"
                  type="text"
                  value={formData?.companyAddress}
                  onChange={(e) => setFormData({ ...formData, companyAddress: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="companyEmail">
                  Company Email <span className="text-rose-500">*</span>
                </label>
                <input
                  id="companyEmail"
                  className="form-input w-full px-2 py-1"
                  type="text"
                  value={formData?.companyEmail}
                  onChange={(e) => setFormData({ ...formData, companyEmail: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="companyContact">
                  Company Contact <span className="text-rose-500">*</span>
                </label>
                <input id="companyContact" className="form-input w-full px-2 py-1" type="text" value={formData?.companyContact} onChange={(e) => setFormData({ ...formData, companyContact: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="contactName">
                  Contact Name <span className="text-rose-500">*</span>
                </label>
                <input
                  id="contactName"
                  className="form-textarea w-full px-2 py-1"
                  type="text"
                  value={formData?.contactName || ''}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="country">
                  Country <span className="text-rose-500">*</span>
                </label>
                <input
                  id="country"
                  className="form-textarea w-full px-2 py-1"
                  type="text"
                  value={formData?.country || ''}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="feedback">
                  Details <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="feedback"
                  className="form-textarea w-full px-2 py-1"
                  rows="4"
                  value={formData?.vendorDetails || ''}
                  onChange={(e) => setFormData({ ...formData, vendorDetails: e.target.value })}
                />
              </div>
            </div>
            <div className="flex flex-wrap justify-end space-x-2">
              <button
                className="btn-sm border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300"
                onClick={(e) => navigate('/admin/vendors')}>
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
  )
}

export default ManageVendor;
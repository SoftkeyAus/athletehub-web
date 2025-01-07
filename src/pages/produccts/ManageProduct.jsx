import { useContext, useEffect, useState } from "react";
import { createUpdateProductrequest, 
         getProductTypes, 
         getVendors, 
         getProductDetailsRequest } from "./http";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { APP_API_URL, AWS_S3_BUCKET } from "../../config/consts";
import { routeURLFormation } from "../../utils/urlFormation";
import { RootContext } from "../../utils/context/RootContextProvider";

function ManageProduct() {

  const [formData, setFormData] = useState({});
  const [productTypes, setProductTypes] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [productImage, setProductImage] = useState();
  const { state:{userType} } = useContext(RootContext);

  const navigate = useNavigate();
  const { id } = useParams();

  const getProductTypesList = async () => {
    try {
      const response = await getProductTypes();
      const data = response.data?.rows;
      setProductTypes(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getVendorsList = async () => {
    try {
      const response = await getVendors();
      setVendors(response?.data?.rows);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductDetails = async (productId) => {
    const data = await getProductDetailsRequest(productId);
    let productInfo = {
      name: data.data.name,
      productTypeId: data.data.productTypeId,
      vendorId: data.data.vendorId,
      sellingPrice: data.data.sellingPrice,
      price: data.data.price,
      details: data.data.details,
      updatedBy: '2',
      productId: data.data.productId,
      primaryImage: data.data.primaryImage
    }
    setFormData(productInfo)
  }
  useEffect(() => {
    getProductTypesList();
    getVendorsList();
    console.log(id)
    if (id) {
      getProductDetails(id);
    }
  }, []);

  const cleanObject = (obj) => {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v !== null && v !== undefined && v !== '' && !(typeof v === 'object' && Object.keys(v).length === 0)));
  };


  const uploadFile = async (event) => {
    try {
      const file = productImage;

      let fd = new FormData();
      fd.append('file', file, file.name);
      fd.append('type', 'products');

      const response = await axios.post(`docs/upload`, fd, {
        baseURL: APP_API_URL
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      let imagePath = null;
      if (productImage) {
        let uploadImgResponse = await uploadFile();
        imagePath = `${AWS_S3_BUCKET}${uploadImgResponse.data.folderName}/${uploadImgResponse.data.fileName}`
      }
      else {
        imagePath = formData.primaryImage
      }      
      let response = null;
      const payload = cleanObject({ ...formData, primaryImage: imagePath });
      if(userType) {
        payload.updatedBy = userType
      }
      response = await createUpdateProductrequest(payload)
      console.log(response);
      if(userType == '0') {
        navigate('/admin/products');
      } else if(userType == '1') {
        navigate('/trainer/products');
      }      
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
          <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">Add Product</h1>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 relative">
        <header className="px-5 py-4">
          <div>

          </div>
        </header>
        <div className="p-3">
          <form id="productFormRef" noValidate onSubmit={(e) => saveProduct(e)}>
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
                <label className="block text-sm font-medium mb-1" htmlFor="productType">
                  Product Type <span className="text-rose-500">*</span>
                </label>
                <select
                  id="productType"
                  className="form-select w-full"
                  value={formData?.productTypeId}
                  onChange={(e) => setFormData({ ...formData, productTypeId: e.target.value })}>
                  <option value="">-- Select product type --</option>
                  {productTypes && productTypes.map((pt, key) => {
                    return (
                      <option value={pt.productTypeId} key={key}>
                        {pt.type}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="vendor">
                  Vendor <span className="text-rose-500">*</span>
                </label>
                <select id="vendor" className="form-select w-full" value={formData?.vendorId} onChange={(e) => setFormData({ ...formData, vendorId: e.target.value })}>
                  <option value="">-- Select Vendor --</option>
                  {vendors.length != 0 && vendors.map((v, key) => {
                    return (
                      <option value={v.vendorId} key={key}>
                        {v.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="name">
                  Price <span className="text-rose-500">*</span>
                </label>
                <input id="name" className="form-input w-full px-2 py-1" type="number" value={formData?.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="name">
                  Selling Price <span className="text-rose-500">*</span>
                </label>
                <input id="name" className="form-input w-full px-2 py-1" type="number" value={formData?.sellingPrice} onChange={(e) => setFormData({ ...formData, sellingPrice: e.target.value })} />
              </div>
              <div className="pb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="productType">
                  Product Image <span className="text-rose-500">*</span>
                </label>
                <input type="file" className="form-control" id="product-image" onChange={(e) => setProductImage(e.target.files[0])} />
                <div>
                  {(id && formData.primaryImage) &&
                    <img
                      src={formData.primaryImage}
                      width="32"
                      height="32"
                      alt="User 04" />}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="feedback">
                  Details <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="feedback"
                  className="form-textarea w-full px-2 py-1"
                  rows="4"
                  value={formData?.details || ''}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                />
              </div>
            </div>
            <div className="flex flex-wrap justify-end space-x-2">
              <button
                className="btn-sm border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300"
                onClick={(e) => navigate(routeURLFormation('products'))}>
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

export default ManageProduct;
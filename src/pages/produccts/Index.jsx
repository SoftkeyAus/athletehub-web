import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import DeleteButton from '../../partials/actions/DeleteButton';
import DateSelect from '../../components/DateSelect';
import FilterButton from '../../components/DropdownFilter';
import ProductsList from './Components/ProductsList';
import { getProducts, deleteProductRequest } from './http';
import ProductViewPopup from './Components/ProductViewPopup';
import { ListSearchComponent } from '../../components/searchComponent';
import { NavLink, useNavigate } from 'react-router-dom';
import PaginatedItems from '../../components/pagination';
import { routeURLFormation } from '../../utils/urlFormation';

function Products() {

  const [products, setProducts] = useState([]);
  const [productsLength, setProductsLength] = useState([]);
  const [productIndividualInfo, setProductIndividualInfo] = useState({});
  const [selectedItems, setSelectedItems] = useState([]);
  const [productModalOpen, setProductModalOpen] = useState(false);
  const [searchValue, setsearchValue] = useState('');
  const navigate = useNavigate();

  const getProductsList = (value, offset) => {
    try {
      getProducts(value, offset)
        .then(response => {
          const data = response.data?.rows;
          setProducts(data);
          setProductsLength(response.data?.count)
        })
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductsList();
  }, []);

  const deleteProduct = async (productId, index) => {
    try {
      let text = "Are you sure you want to delete this product";
      if (confirm(text) == true) {
        await deleteProductRequest(productId);
        getProductsList();
      }

    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || 'Error while deleting the product');
    }
  };

  const onProductModalPoupup = (status) => {
    setProductModalOpen(status)
  }

  const onSearch = (e) => {
    let value = e.target.value;
    setsearchValue(value);
    getProductsList(value)
  }

  const openViewProductModal = (data) => {
    setProductIndividualInfo(data);
    setProductModalOpen(true);
  }

  const onSwitchPage = (offset) => {
    getProductsList("", offset)
  }

  return (
    <div>
      {/* Page header */}
      <div className="sm:flex sm:justify-between sm:items-center mb-8">
        {/* Left: Title */}
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">Products</h1>
        </div>

        {/* Right: Actions */}
        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
          {/* Delete button */}
          <DeleteButton selectedItems={selectedItems} />

          {/* Dropdown */}
          <DateSelect />

          {/* Filter button */}
          <FilterButton align="right" />

          {/* Add customer button */}
          <NavLink end to={routeURLFormation('manageProduct')}>
            <button type="button"
              className="btn bg-indigo-500 hover:bg-indigo-600 text-white"
              onClick={(e) => navigate(routeURLFormation('manageProduct'))}>
              <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
              </svg>
              <span className="hidden xs:block ml-2">Add Product</span>
            </button>
          </NavLink>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 relative">
        <header className="px-5 py-4">
          <div>
            {/* search for the list */}
            <ListSearchComponent
              onSearch={onSearch}
              searchValue={searchValue}
              label="Search with product name" />
          </div>
        </header>
        <div>
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="table-auto w-full dark:text-slate-300">
              {/* Table header */}
              <thead className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/20 border-t border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div className="font-semibold text-left">Image</div>
                  </th>
                  <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div className="font-semibold text-left">Product Name</div>
                  </th>
                  <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div className="font-semibold text-left">Product Type</div>
                  </th>
                  <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div className="font-semibold text-left">Price</div>
                  </th>
                  <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div className="font-semibold text-left">Selling Price</div>
                  </th>
                  <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div className="font-semibold text-left">Vendor</div>
                  </th>
                  <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div className="font-semibold text-left">Details</div>
                  </th>
                  <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div className="font-semibold text-left">Actions</div>
                  </th>
                </tr>
              </thead>
              {/* Table body for product list */}
              <tbody className="text-sm divide-y divide-slate-200 dark:divide-slate-700">
                {products && products.length == 0 && <tr>
                  <td colSpan={`9`}>
                    <p className="p-4 ml-2 mb-0"><b>No Records</b></p>
                  </td>
                </tr>}
                {products && products.map((product, i) => {
                  return (
                    <ProductsList
                      key={i}
                      product={product}
                      deleteProduct={deleteProduct}
                      openViewProductModal={openViewProductModal} />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-8">
        <PaginatedItems 
          itemsPerPage={5} 
          itemsLength={productsLength}
          switchPage={onSwitchPage} />        
      </div>

      {/* Popup for add and edit product */}
      <ProductViewPopup
        productModalOpen={productModalOpen}
        onProductModalPoupup={onProductModalPoupup}
        productIndividualInfo={productIndividualInfo} />
    </div>
  );
}

export default Products;
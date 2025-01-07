import { useState } from 'react';
import ModalBasic from '../../../components/ModalBasic';

function ProductViewPopup({
  productModalOpen,
  onProductModalPoupup,
  productIndividualInfo
}) {

  return (
    <ModalBasic id="product-modal" modalOpen={productModalOpen} title="Product">
      {/* Modal content */}
      <div className="px-5 py-4">
        <table className="table-auto w-full dark:text-slate-300">
          <tbody className="text-sm divide-y divide-slate-200 dark:divide-slate-700">
            <tr>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>Product Name:</td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{productIndividualInfo.name}</td>
            </tr>
            <tr>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>Product Type:</td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{productIndividualInfo.productType?.type}</td>
            </tr>
            <tr>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>Product Vendor:</td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{productIndividualInfo.vendor?.name}</td>
            </tr>
            <tr>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>Seling Price:</td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{productIndividualInfo.sellingPrice}</td>
            </tr>
            <tr>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>Price:</td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{productIndividualInfo.price}</td>
            </tr>
            <tr>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>Details:</td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{productIndividualInfo.details}</td>
            </tr>
            <tr>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>Created By:</td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{productIndividualInfo.createdBy}</td>
            </tr>
            <tr>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>Updated By:</td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{productIndividualInfo.updatedBy}</td>
            </tr>
            <tr>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>Image:</td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                {productIndividualInfo?.primaryImage ? 
                  <img className="" 
                       src={productIndividualInfo.primaryImage} 
                       width="100" 
                       height="100" 
                       alt="User 04" /> : 'No Image'}
              </td>
            </tr>
            {/* <tr>
              <td>Create at:</td>
              <td>{productIndividualInfo.name}</td>
            </tr>
            <tr>
              <td>Updated at:</td>
              <td>{productIndividualInfo.name}</td>
            </tr> */}
          </tbody>
        </table>
      </div>
      {/* Modal footer */}
      <div className="px-5 py-4 border-t border-slate-200 dark:border-slate-700">
        <div className="flex flex-wrap justify-end space-x-2">
          <button
            className="btn-sm border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300"
            onClick={(e) => {
              e.stopPropagation();
              onProductModalPoupup(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </ModalBasic>
  )
}

export default ProductViewPopup;
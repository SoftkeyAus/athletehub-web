import { useState } from 'react';
import ModalBasic from '../../../components/ModalBasic';

function ProductTypeViewPopup({
  productTypeModalOpen,
  onProductTypeModalPoupup,
  productTypeIndividualInfo
}) {

  return (
    <ModalBasic id="productType-modal" modalOpen={productTypeModalOpen} title="Product type">
      {/* Modal content */}
      <div className="px-5 py-4">
        <table className="table-auto w-full dark:text-slate-300">
          <tbody className="text-sm divide-y divide-slate-200 dark:divide-slate-700">
            <tr>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>Type:</td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{productTypeIndividualInfo.type}</td>
            </tr>
            <tr>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>Description:</td>
              <td className='px-2 first:pl-5 last:pr-5 py-3'>{productTypeIndividualInfo.description}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Modal footer */}
      <div className="px-5 py-4 border-t border-slate-200 dark:border-slate-700">
        <div className="flex flex-wrap justify-end space-x-2 mt-3">
          <button
            className="btn-sm border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300"
            onClick={(e) => {
              e.stopPropagation();
              onProductTypeModalPoupup(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </ModalBasic>
  )
}

export default ProductTypeViewPopup;
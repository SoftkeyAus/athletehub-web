import { useState } from 'react';
import ModalBasic from '../../../components/ModalBasic';

function VendorViewPopup({
  vendorModalOpen,
  onVendorModalPoupup,
  vendorIndividualInfo
}) {

  return (
    <ModalBasic id="vendor-modal" modalOpen={vendorModalOpen} title="Vendor">
      {/* Modal content */}
      <div className="px-5 py-4">
        <table className="table-auto w-full dark:text-slate-300">
          <tbody className="text-sm divide-y divide-slate-200 dark:divide-slate-700">
            <tr>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>Name:</td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{vendorIndividualInfo.name}</td>
            </tr>
            <tr>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>Compan No:</td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{vendorIndividualInfo.companyNo}</td>
            </tr>
            <tr>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>Company Address:</td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{vendorIndividualInfo.companyAddress}</td>
            </tr>
            <tr>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>Company Email:</td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{vendorIndividualInfo.companyEmail}</td>
            </tr>
            <tr>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>Company Contact:</td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{vendorIndividualInfo.companyContact}</td>
            </tr>
            <tr>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>Contact Name:</td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{vendorIndividualInfo.contactName}</td>
            </tr>
            <tr>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>Country:</td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{vendorIndividualInfo.country}</td>
            </tr>
            <tr>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>Details:</td>
              <td className='px-2 first:pl-5 last:pr-5 py-3'>{vendorIndividualInfo.vendorDetails}</td>
            </tr>
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
              onVendorModalPoupup(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </ModalBasic>
  )
}

export default VendorViewPopup;
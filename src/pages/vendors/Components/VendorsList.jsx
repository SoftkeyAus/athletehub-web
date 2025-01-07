import { useNavigate } from "react-router-dom";

function VendorsList({
  vendor,
  index,
  deleteVendor,
  openViewVendorModal
}) {

  const navigate = useNavigate();

  return (
    <tr>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{vendor.name}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{vendor.companyNo}</div>
      </td>
      {/* <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{vendor.companyAddress}</div>
      </td> */}
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{vendor.companyEmail}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3">
        <div className="text-left">{vendor.companyContact}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3">
        <div className="text-left">{vendor.contactName}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3">
        <div className="text-left">{vendor.country}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3">
        <div className="text-left">{vendor.vendorDetails && vendor.vendorDetails.substring(0, 20)}...</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
      <button
          className="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 py-1 px-3 cursor-pointer inline-block"
          onClick={() => openViewVendorModal(vendor)}
        >
          <i className="fa-solid fa-eye fa-medium-x"></i>          
        </button>
        <button
          className="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 py-1 px-3 cursor-pointer inline-block"
          onClick={(e) => navigate(`/admin/manageVendor/${vendor.vendorId}`)}
        >
          <i className="fa-solid fa-pen-to-square fa-medium-x"></i>          
        </button>
        <button className="font-medium text-sm text-rose-500 hover:text-rose-600 py-1 px-3 cursor-pointer inline-block" 
          onClick={() => deleteVendor(vendor.vendorId, index)}>
          <i className="fa fa-trash fa-medium-x"></i>
        </button>
      </td>
    </tr>
  )
}
  
export default VendorsList;
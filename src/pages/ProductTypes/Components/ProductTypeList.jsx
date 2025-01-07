import { useNavigate } from "react-router-dom";

function ProductTypesList({
  productType,
  index,
  deleteProductType,
  openViewProductTypeModal
}) {

  const navigate = useNavigate();

  return (
    <tr>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{productType.type}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{productType.description && productType.description.substring(0, 20)}...</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
        <button
          className="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 py-1 px-3 cursor-pointer inline-block"
          onClick={() => openViewProductTypeModal(productType)}
        >
          <i className="fa-solid fa-eye fa-medium-x"></i>
        </button>
        <button
          className="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 py-1 px-3 cursor-pointer inline-block"
          onClick={(e) => navigate(`/admin/manage-product-types/${productType.productTypeId}`)}
        >
          <i className="fa-solid fa-pen-to-square fa-medium-x"></i>
        </button>
        <button className="font-medium text-sm text-rose-500 hover:text-rose-600 py-1 px-3 cursor-pointer inline-block"
          onClick={() => deleteProductType(productType.productTypeId, index)}>
          <i className="fa fa-trash fa-medium-x"></i>
        </button>
      </td>
    </tr>
  )
}

export default ProductTypesList;
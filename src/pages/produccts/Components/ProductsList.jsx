import { useNavigate } from "react-router-dom";

function ProductsList({
  product,
  index,
  deleteProduct,
  openViewProductModal
}) {

  const navigate = useNavigate();

  return (
    <tr>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        {(product?.primaryImage) ? <img className="rounded-full" 
                                      src={product.primaryImage} 
                                      width="32" 
                                      height="32" 
                                      alt="User 04" /> : ''}
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left" title={product.name}>
          {product.name && 
            <>
              {product.name.substring(0, 20)}  
              {product.name.length > 20?"...":""}
            </>
          }
        </div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{product.productType?.type}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{product.price}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{product.sellingPrice}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{product.vendor?.name}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3">
        <div className="text-left" title={product.details}>
          {product.details && 
            <>
              {product.details.substring(0,20)}
              {product.details.length > 20?"...":""}
            </>
          }
        </div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
      <button
          className="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 py-1 px-3 cursor-pointer inline-block"
          onClick={() => openViewProductModal(product)}
        >
          <i className="fa-solid fa-eye fa-medium-x"></i>          
        </button>
        <button
          className="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 py-1 px-3 cursor-pointer inline-block"
          onClick={(e) => navigate(`/admin/manageProduct/${product.productId}`)}
        >
          <i className="fa-solid fa-pen-to-square fa-medium-x"></i>          
        </button>
        <button className="font-medium text-sm text-rose-500 hover:text-rose-600 py-1 px-3 cursor-pointer inline-block" 
          onClick={() => deleteProduct(product.productId, index)}>
          <i className="fa fa-trash fa-medium-x"></i>
        </button>
      </td>
    </tr>
  )
}

export default ProductsList;
import { useNavigate } from "react-router-dom";

function TrainersList({
  trainer,
  index,
  deleteTrainer,
  openViewTrainerModal
}) {

  const navigate = useNavigate();

  return (
    <tr>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        {(trainer?.profileImage) ? <img className="rounded-full" 
                                      src={trainer.profileImage} 
                                      width="32" 
                                      height="32" 
                                      alt="User 04" /> : ''}
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{trainer.firstName}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{trainer.lastName}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{trainer.email}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{trainer.mobile}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{trainer.trainingType?.name}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3">
        <div className="text-left">{trainer.ageGroupName }</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{trainer.zipcode}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{trainer.address}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{trainer.city}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{trainer.country}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{trainer.userName}</div>
      </td>
      
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{trainer.licenseNumber}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{trainer.sports}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{trainer.achievements}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
      <button
          className="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 py-1 px-3 cursor-pointer inline-block"
          onClick={() => openViewTrainerModal(trainer)}
        >
          <i className="fa-solid fa-eye fa-medium-x"></i>          
        </button>
        <button
          className="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 py-1 px-3 cursor-pointer inline-block"
          onClick={(e) => navigate(`/admin/manageTrainer/${trainer.trainerId}`)}
        >
          <i className="fa-solid fa-pen-to-square fa-medium-x"></i>          
        </button>
        <button className="font-medium text-sm text-rose-500 hover:text-rose-600 py-1 px-3 cursor-pointer inline-block" 
          onClick={() => deleteTrainer(trainer.trainerId, index)}>
          <i className="fa fa-trash fa-medium-x"></i>
        </button>
      </td>
    </tr>
  )
}

export default TrainersList;
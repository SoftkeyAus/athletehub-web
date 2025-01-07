import { useState } from 'react';
import ModalBasic from '../../../components/ModalBasic';

function TrainerViewPopup({
  trainerModalOpen,
  onTrainerModalPoupup,
  trainerIndividualInfo
}) {

  return (
    <ModalBasic id="trainer-modal" modalOpen={trainerModalOpen} title="Trainer">
      {/* Modal content */}
      <div className="px-5 py-4">
        <table className="table-auto w-full dark:text-slate-300">
          <tbody className="text-sm divide-y divide-slate-200 dark:divide-slate-700">
            <tr>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>First Name:</td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{trainerIndividualInfo.firstName}</td>
            </tr>
            <tr>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>Last Name:</td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{trainerIndividualInfo.lastName}</td>
            </tr>
            <tr>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>Email:</td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{trainerIndividualInfo.email}</td>
            </tr>
            <tr>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>Mobile:</td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{trainerIndividualInfo.mobile}</td>
            </tr>
            <tr>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>Training Type:</td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{trainerIndividualInfo.trainingType?.name}</td>
            </tr>
            <tr>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>Subscription Type:</td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{trainerIndividualInfo.subscriptionName}</td>
            </tr>
            <tr>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>Age Group:</td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{trainerIndividualInfo.ageGroupName}</td>
            </tr>
            <tr>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>Zip Code:</td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{trainerIndividualInfo.zipcode}</td>
            </tr>
            <tr>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>Address:</td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{trainerIndividualInfo.address}</td>
            </tr>
            <tr>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>City:</td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{trainerIndividualInfo.city}</td>
            </tr>
            <tr>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>Country:</td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{trainerIndividualInfo.country}</td>
            </tr>
            <tr>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>User Name:</td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{trainerIndividualInfo.userName}</td>
            </tr>
            <tr>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>License Number:</td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{trainerIndividualInfo.licenseNumber}</td>
            </tr>
            <tr>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>Sports:</td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{trainerIndividualInfo.sports}</td>
            </tr>
            <tr>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>Achievements:</td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{trainerIndividualInfo.achievements}</td>
            </tr>
            <tr>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>Profile Pic:</td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                {trainerIndividualInfo?.profileImage ? 
                  <img className="" 
                       src={trainerIndividualInfo.profileImage} 
                       width="100" 
                       height="100" 
                       alt="User 04" /> : 'No Image'}
              </td>
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
              onTrainerModalPoupup(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </ModalBasic>
  )
}

export default TrainerViewPopup;

import ModalBasic from './ModalBasic';
import Users from '../pages/authentication/http'
function Profile({
    userType,
    userModalOpen,
    userIndividualInfo
}) {
    const getUserDetails = async (userType) => {
        const data = await Users(userType);
        let userInfo = {
          firstName: data.data.firstName,
          lastName: data.data.lastName,
          email: data.data.email,
          mobile: data.data.mobile,
          trainingTypeId: data.data.trainingTypeId,
          ageGroup: data.data.ageGroup,
          zipcode: data.data.zipcode,
          updatedBy: '2',
          profileImage: data.data.profileImage,
          address: data.data.address,
          city: data.data.city,
          country: data.data.country,
          userName: data.data.userName,
          licenseNumber: data.data.licenseNumber,
          sports: data.data.sports,
          achievements: data.data.achievements,
          subscription: data.data.subscription
        }
        setFormData(userInfo)
      }
    getUserDetails(userType);



    return (
        <ModalBasic id="trainer-modal" modalOpen={userModalOpen} title="Profile   ">
            {/* Modal content */}
            <div className="px-5 py-4">
                <table className="table-auto w-full dark:text-slate-300">
                    <tbody className="text-sm divide-y divide-slate-200 dark:divide-slate-700">
                        <tr>
                            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>First Name:</td>
                            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{userIndividualInfo.firstName}</td>
                        </tr>
                        <tr>
                            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>Last Name:</td>
                            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{userIndividualInfo.lastName}</td>
                        </tr>
                        <tr>
                            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>Email:</td>
                            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{userIndividualInfo.email}</td>
                        </tr>
                        <tr>
                            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>Mobile:</td>
                            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{userIndividualInfo.mobile}</td>
                        </tr>
                        <tr>
                            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>Training Type:</td>
                            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{userIndividualInfo.trainingType?.name}</td>
                        </tr>
                        <tr>
                            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>Subscription Type:</td>
                            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{userIndividualInfo.subscriptionName}</td>
                        </tr>
                        <tr>
                            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>Age Group:</td>
                            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{userIndividualInfo.ageGroupName}</td>
                        </tr>
                        <tr>
                            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>Zip Code:</td>
                            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{userIndividualInfo.zipcode}</td>
                        </tr>
                        <tr>
                            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>Address:</td>
                            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{userIndividualInfo.address}</td>
                        </tr>
                        <tr>
                            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>City:</td>
                            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{userIndividualInfo.city}</td>
                        </tr>
                        <tr>
                            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>Country:</td>
                            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{userIndividualInfo.country}</td>
                        </tr>
                        <tr>
                            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>User Name:</td>
                            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{userIndividualInfo.userName}</td>
                        </tr>
                        <tr>
                            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>License Number:</td>
                            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{userIndividualInfo.licenseNumber}</td>
                        </tr>
                        <tr>
                            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>Sports:</td>
                            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{userIndividualInfo.sports}</td>
                        </tr>
                        <tr>
                            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>Achievements:</td>
                            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>{userIndividualInfo.achievements}</td>
                        </tr>
                        <tr>
                            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>Profile Pic:</td>
                            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                                {userIndividualInfo?.profileImage ?
                                    <img className=""
                                        src={athleteIndividualInfo.profileImage}
                                        width="100"
                                        height="100"
                                        alt="User 04" /> : 'No Image'}
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </ModalBasic>
    )
}
export default Profile
import { NavLink, useLocation } from 'react-router-dom';

function AthleteSideMenu() {

  const location = useLocation();
  const { pathname } = location;

  const trainerSideBar = [
    {
      name: "Dashboard",
      path: "/athlete/dashboard"
    },
    {
      name: "Training Videos",
      path: "/athlete/trainingVideos"
    }
  ]

  return (
    <>
      {trainerSideBar.map((data, i) => ( 
        <li key={i} className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('inbox') && 'bg-slate-900'}`}>
          <NavLink end to={data.path} className={`block text-slate-200 truncate transition duration-150 ${pathname.includes('inbox') ? 'hover:text-slate-200' : 'hover:text-white'}`}>
            <div className="flex items-center">
              <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">{data.name}</span>
            </div>
          </NavLink>
        </li>
      ))}
    </>
  )
}
export default AthleteSideMenu;
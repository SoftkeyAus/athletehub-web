import { useContext } from "react";
import PrivateRouter from "./routes/PrivateRoutes";
import PublicRouter from "./routes/PublicRoutes";
import { RootContext } from "./utils/context/RootContextProvider";

const MainApp = () => {

  const contextText = useContext(RootContext);
  const {state:{isloggedIn}} = contextText;

  return (
    <>
      <div id="loader"><div className="spinner">Please wait...</div></div>
      {!isloggedIn && <PublicRouter /> }
      {isloggedIn && <PrivateRouter /> }
    </>
  )
}

export default MainApp;
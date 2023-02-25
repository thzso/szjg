import Sidebar from "./Sidebar"
import { Outlet } from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';

const Layout2 =()=>{

  return(
    <>
    <MenuIcon />
    <div className="app_outlet">
      <Outlet></Outlet>
    </div>
  </>
  )
}

export default Layout2
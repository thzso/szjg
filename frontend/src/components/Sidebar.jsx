import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sideBar}>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.activeStyle : styles.navLink
        }
        to={"/"}
      >
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? styles.activeStyle : styles.navLink
        }
        to={"/etchings"}
      >
        Etchings
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? styles.activeStyle : styles.navLink
        }
        to={"/paintings"}
      >
        Paintings
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? styles.activeStyle : styles.navLink
        }
        to={"/digital"}
      >
        Digital
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? styles.activeStyle : styles.navLink
        }
        to={"/comics"}
      >
        Comics
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? styles.activeStyle : styles.navLink
        }
        to={"/links&contacts"}
      >
        Links & Contacts
      </NavLink>
      
    </div>
  );
};

export default Sidebar;

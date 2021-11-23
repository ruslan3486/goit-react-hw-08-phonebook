import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getIsAuthenticated } from "../../redux/auth/auth-selectors";
import { IoHome } from "react-icons/io5";
import { ImListNumbered } from "react-icons/im";
import s from "./Navigations.module.css";

export default function Navigations() {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const screenWidth = window.innerWidth;

  return (
    <nav>
      <NavLink className={s.link} to="/">
        <IoHome size="20" />
      </NavLink>
      {isAuthenticated && (
        <NavLink className={s.link} to="/contacts">
          {screenWidth <= 767 ? <ImListNumbered /> : "Контакты"}
        </NavLink>
      )}
    </nav>
  );
}

// const styles = {
//     link: {
//         display: 'inline-block',
//         textDecoration: 'none',
//         padding: 12,
//         fontWeight: 700,
//         color: '#2A363B',
//     },
//     activeLink: {
//         color: '#E84A5F',
//     },
// };

// const Navigation = () => (
//     <nav>
//         <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
//             Главная
//         </NavLink>

//         <NavLink
//             to="/todos"
//             exact
//             style={styles.link}
//             activeStyle={styles.activeLink}
//         >
//             Заметки
//         </NavLink>
//     </nav>
// );

// export default Navigation;

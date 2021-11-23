import { NavLink } from "react-router-dom";
import s from "./Navigations.module.css";

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

export default function AuthNav() {
  return (
    <>
      <NavLink className={s.link} to="/register">
        Регистрация
      </NavLink>
      <NavLink className={s.link} to="/login">
        Войти
      </NavLink>
    </>
  );
}

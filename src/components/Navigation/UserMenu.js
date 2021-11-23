import { useDispatch, useSelector } from "react-redux";
import { getUserName } from "../../redux/auth/auth-selectors";
import authOperations from "../../redux/auth/auth-operations";
import { ImExit } from "react-icons/im";
import s from "./Navigations.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <div className={s.container}>
      <span className={s.name}>{name}</span>

      <ImExit
        size="20"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      />
    </div>
  );
}

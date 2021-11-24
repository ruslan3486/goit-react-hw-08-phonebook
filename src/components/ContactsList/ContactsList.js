import { useSelector, useDispatch } from "react-redux";
import {
  deleteContacts,
  // editContacts,
} from "../../redux/contacts/contacts-operations";
import { getFilteredContacts } from "../../redux/contacts/contacts-selectors";
import propTypes from "prop-types";
import s from "./contactList.module.css";

export default function ContactsList({ onOpenModal }) {
  const filterContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  return (
    <>
      <ul>
        {filterContacts.map(({ id, name, number }) => (
          <li className={s.item} key={id}>
            <p className={s.nameText}>
              {name}: <span>{number}</span>
            </p>
            <div>
              <button
                className={s.button}
                type="button"
                onClick={() => onOpenModal({ name, number }, id)}
              >
                Модалка
              </button>
              <button
                className={s.button}
                type="button"
                onClick={() => dispatch(deleteContacts(id))}
              >
                Удалить
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

ContactsList.propTypes = {
  onDeleteBtn: propTypes.func,
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string,
      name: propTypes.string,
      number: propTypes.string,
    })
  ),
};

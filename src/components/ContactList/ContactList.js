import { useSelector, useDispatch } from "react-redux";
// import PropTypes from "prop-types";
import s from "./contactList.module.css";
import { getFilteredContacts } from "../../redux/phonebook/phonebook-selectors";
// import types from '../../redux/phonebook/phonebook-actions'
import { deleteContact } from "../../redux/phonebook/phonebook-actions";
import { FaUserEdit, FaTrashAlt } from "react-icons/fa";
export default function ContactList({ onOpenModal }) {
  // const { contacts, filter } = useSelector((state) => state);
  const dispatch = useDispatch();
  const filterContacts = useSelector(getFilteredContacts);
  // const onDeleteContact = (id) => dispatch(deleteContact(id));

  // const filteredContacts = (contacts, filter) => {
  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  // const filterContact = useSelector(getFilteredContacts);
  return (
    <>
      <ul>
        {filterContacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name}: <span>{number}</span>
            </p>
            <div>
              <button
                type="button"
                onClick={() => onOpenModal({ name, number }, id)}
              >
                <FaUserEdit size="20" />
              </button>
              <button type="button" onClick={() => dispatch(deleteContact(id))}>
                <FaTrashAlt size="20" className={s.delete} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
// const getVisibleContacts = (allContact, filter) => {
//   const normalizedFilter = filter.toLowerCase();
//   return allContact.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );
// };

// const mapStateToProps = ({ contacts: { items, filter } }) => ({

//     contacts: getVisibleContacts(items, filter)
// })

// const mapDispachToProps = dispatch => ({

//     onDeleteContact: dataId => dispatch(deleteContact(dataId))
// })

// ContactList.propType = {

//     ontacts: PropTypes.arrayOf(PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,

//     })),
// }

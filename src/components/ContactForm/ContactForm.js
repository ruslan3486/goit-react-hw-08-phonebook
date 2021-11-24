import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import PropTypes from 'prop-types';
import s from "./ContactForm.module.css";
import { addContact } from "../../redux/phonebook/phonebook-actions";
import { getisAdded } from "../../redux/phonebook/phonebook-selectors";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const isAdded = useSelector(getisAdded);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    // const data = (name) =>
    //   contacts.map((contact) => contact.name).includes(name);

    if (isAdded(name)) {
      return alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact(name, number));
    }
    setName("");
    setNumber("");
  };

  return (
    <form className={s.text} onSubmit={(e) => handleSubmit(e)}>
      <label id="name" className={s.text_contact} htmlFor="name">
        <input
          className={s.text_input}
          type="text"
          name="name"
          value={name}
          placeholder="Michael Jordan"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label id="phone" htmlFor="phone" className={s.text_contact}>
        <input
          className={s.text_input}
          type="text"
          name="number"
          value={number}
          placeholder="555-55-555"
          onChange={(e) => setNumber(e.target.value)}
        />
      </label>
      <button
        className={s.text_button}
        disabled={!(name && number)}
        type="submit"
      >
        Add contacts
      </button>
    </form>
  );
}

// ContactForm.propTypes = {

//     name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
// }

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editContacts } from "../../redux/phonebook/phonebook-operations";

export default function ContactModal({ contactData, onCloseModal }) {
  const { contact, id } = contactData;
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const handlePressEsc = (e) => {
      if (e.code === "Escape") {
        onCloseModal(false);
      }
    };
    window.addEventListener("keydown", handlePressEsc);
    return () => {
      window.removeEventListener("keydown", handlePressEsc);
    };
  });

  const handleBackDropClick = (e) => {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  };

  const handleSave = () => {
    const updateContact = {
      name: name ? name : contact.name,
      number: number ? number : contact.number,
    };
    dispatch(editContacts(id, updateContact));
    onCloseModal(false);
  };

  return (
    <div onClick={(e) => handleBackDropClick(e)}>
      <div>
        <button type="button" onClick={() => onCloseModal(false)}>
          close
        </button>
        <form>
          <div>
            <label htmlFor="editName"></label>
            <input
              type="text"
              name="name"
              id="editName"
              value={name}
              placeholder={contact.name}
              onChange={({ target: { value } }) => setName(value)}
            />
          </div>
          <div>
            <label htmlFor="editNumber"></label>
            <input
              type="tel"
              name="number"
              id="editNamber"
              value={number}
              placeholder={contact.number}
              onChange={({ target: { value } }) => setNumber(value)}
            />
          </div>

          <button type="button" onClick={handleSave}>
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}

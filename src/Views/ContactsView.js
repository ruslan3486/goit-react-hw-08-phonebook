import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "../redux/phonebook/phonebook-operations";
import {
  getContacts,
  getLoading,
} from "../redux/phonebook/phonebook-selectors";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import Filter from "../components/Filter/Filter";
import ContactModal from "../components/ContactModal.js/ContactModal";
import Section from "../components/Section/Section";
export default function ConactsView() {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getLoading);
  const dispatch = useDispatch();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [editContact, setEditContact] = useState({});

  const handleOpenModal = (contact, id) => {
    setIsOpenModal(true);
    setEditContact({ contact, id });
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section title="Введите имя и номер">
      <div style={{ display: "flex", justifyContent: "center" }}>
        {isLoading ? (
          <Loader type="Rings" color="#00BFFF" height={80} width={80} />
        ) : null}
      </div>

      <ContactForm />

      {contacts.length ? (
        <Section title="Контакты">
          <Filter />
          <ContactList onOpenModal={handleOpenModal} />
          {isOpenModal && (
            <ContactModal
              onCloseModal={setIsOpenModal}
              contactData={editContact}
            />
          )}
        </Section>
      ) : null}
    </Section>
  );
}

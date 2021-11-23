import { useState } from "react";
import { useDispatch } from "react-redux";
import { warnNotify } from "../services/tostify";
import Section from "../components/Section/Section";
import authOperations from "../redux/auth/auth-operations";

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
  },
};

export default function RegisterView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPass, setCheckPass] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== checkPass) {
      warnNotify("Пароли не совпадают");
      return;
    }

    const user = { name, email, password };
    dispatch(authOperations.register(user));

    setName("");
    setEmail("");
    setPassword("");
    setCheckPass("");
  };

  return (
    <Section title="Заполните форму">
      <form>
        <div>
          <label style={styles.label} htmlFor="name"></label>
          <input
            type="Name"
            name="Name"
            id="name"
            value={name}
            placeholder="имя"
            onChange={({ target: { value } }) => setName(value)}
          />
        </div>
        <div>
          <label style={styles.label} htmlFor="email"></label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="email"
            onChange={({ target: { value } }) => setEmail(value)}
          />
        </div>
        <div>
          <label style={styles.label} htmlFor="password"></label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            placeholder="пароль"
            onChange={({ target: { value } }) => setPassword(value)}
          />
        </div>

        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Регистрация
        </button>
      </form>
    </Section>
  );
}

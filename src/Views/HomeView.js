import { NavLink } from "react-router-dom";
import Section from "../components/Section/Section";
import Container from "../components/Container/Container";

export default function HomeView() {
  return (
    <Container>
      <Section>
        <div>
          <h1>Добро пожаловать!</h1>
          <NavLink to="/register">Register</NavLink>

          <p>
            Это приложение для записи и хранения телефонных номеров ваших друзей
            и знакомых
          </p>
        </div>
      </Section>
    </Container>
  );
}

// const styles = {
//     container: {
//         minHeight: 'calc(100vh - 50px)',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     title: {
//         fontWeight: 500,
//         fontSize: 48,
//         textAlign: 'center',
//     },
// };

// const HomeView = () => (
//     <div style={styles.container}>
//         <h1 style={styles.title}>
//             Приветственная страница нашего сервиса{' '}
//             <span role="img" aria-label="Иконка приветствия">
//                 💁‍♀️
//             </span>
//         </h1>
//     </div>
// );

// export default HomeView;

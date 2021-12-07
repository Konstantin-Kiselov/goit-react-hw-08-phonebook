// import { useEffect, useState } from 'react';
import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import { Container } from 'react-bootstrap';

import AppBar from './AppBar';
import Container from './Container/Container';

const HomeView = lazy(() => import('../views/HomeView'));
const ContactsView = lazy(() => import('../views/ContactsView'));
const RegisterView = lazy(() => import('../views/RegisterView'));
const LoginView = lazy(() => import('../views/LoginView'));

export default function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(authOperations.fetchCurrentUser());
  // }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Suspense fallback={<h1>ЗАГРУЖАЕМ...</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>

          <Route path="/register">
            <RegisterView />
          </Route>

          <Route path="/login">
            <LoginView />
          </Route>

          <Route path="/contacts">
            <ContactsView />
          </Route>

          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Container>
  );
}

// useEffect(() => {
//   const contactsLocalStor = localStorage.getItem('contacts');
//   const parsedContacts = JSON.parse(contactsLocalStor);

//   if (parsedContacts) {
//     setContacts(parsedContacts);
//   }
// }, []);

// useEffect(() => {
//   localStorage.setItem('contacts', JSON.stringify(contacts));
// }, [contacts]);

// const [contacts, setContacts] = useState([
// { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
// { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
// { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
// { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ]);
// const [filter, setFilter] = useState('');

// useEffect(() => {
//   const contactsLocalStor = localStorage.getItem('contacts');
//   const parsedContacts = JSON.parse(contactsLocalStor);

//   if (parsedContacts) {
//     setContacts(parsedContacts);
//   }
// }, []);

// useEffect(() => {
//   localStorage.setItem('contacts', JSON.stringify(contacts));
// }, [contacts]);

// const getVisibleContacts = () => {
//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );
// };

// const addContact = ({ name, number }) => {
//   const contact = {
//     id: uuidv4(),
//     name,
//     number,
//   };

//   setContacts(contacts => {
//     if (contacts.some(contact => contact.name === name)) {
//       alert(`${name} is already in contacts!`);
//       return contacts;
//     }
//     return [contact, ...contacts];
//   });
// };

// const deleteContact = contactId => {
//   setContacts(contacts =>
//     contacts.filter(contact => contact.id !== contactId),
//   );
// };

// const changeFitler = e => {
//   setFilter(e.target.value);
// };

// const visibleContacts = getVisibleContacts();

//  <Navbar bg="dark" variant="dark">
//    <Container>
//      <Navbar.Brand href="/">Navbar</Navbar.Brand>
//      <Nav className="me-auto">
//        <Nav.Link to="/login">Login</Nav.Link>
//        <Nav.Link href="/register">Registration</Nav.Link>
//      </Nav>
//    </Container>
//  </Navbar>;

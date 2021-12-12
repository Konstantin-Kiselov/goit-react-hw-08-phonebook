import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Redirect } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import { Container } from 'react-bootstrap';

import AppBar from './AppBar';
import Container from './Container/Container';
import { authOperations, authSelectors } from '../redux/auth';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

const HomeView = lazy(() => import('../views/HomeView'));
const ContactsView = lazy(() => import('../views/ContactsView'));
const RegisterView = lazy(() => import('../views/RegisterView'));
const LoginView = lazy(() => import('../views/LoginView'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsCurrentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Container>
        <AppBar />

        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <PublicRoute path="/" exact>
              <HomeView />
            </PublicRoute>

            <PublicRoute path="/register" redirectTo="/contacts" restricted>
              <RegisterView />
            </PublicRoute>

            <PublicRoute path="/login" redirectTo="/contacts" restricted>
              <LoginView />
            </PublicRoute>

            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsView />
            </PrivateRoute>

            <Redirect to="/" />
          </Switch>
        </Suspense>
      </Container>
    )
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

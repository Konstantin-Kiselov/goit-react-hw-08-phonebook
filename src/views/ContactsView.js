import Section from '../components/Section/Section';
import ContactList from '../components/ContactList/ContactList';
import Form from '../components/Form/Form';
import Filter from '../components/Filter/Filter';

export default function ContactsView() {
  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </>
  );
}

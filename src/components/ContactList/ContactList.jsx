import Contact from '../Contact/Contact.jsx';
import css from "./ContactList.module.css"

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className={css.container}>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default ContactList;


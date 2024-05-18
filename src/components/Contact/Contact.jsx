import css from "./Contact.module.css";

const Contact = ({id, name, number, onDelete }) => {
  return (
    <div className={css.container}>
        <div>  
            <p>Name: {name}</p>
            <p>Number: {number}</p>
        </div>
 <button type="button" onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default Contact;

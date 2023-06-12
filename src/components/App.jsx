// import { useState } from 'react';

// import { addEntry, removeEntry } from '../store/pbSlice';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  // const [text, setText] = useState('');

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
};

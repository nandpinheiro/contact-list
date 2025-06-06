import { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

function App() {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  const addContact = (contact) => {
    setContacts([...contacts, { ...contact, id: Date.now() }]);
  };

  const updateContact = (updatedContact) => {
    setContacts(
      contacts.map((c) => (c.id === updatedContact.id ? updatedContact : c))
    );
    setEditingContact(null);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((c) => c.id !== id));
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '1rem' }}>
      <h1>📱 Lista de Contatos</h1>
      <ContactForm
        onSubmit={editingContact ? updateContact : addContact}
        initialData={editingContact}
        clearForm={() => setEditingContact(null)}
      />
      <ContactList
        contacts={contacts}
        onEdit={(contact) => setEditingContact(contact)}
        onDelete={deleteContact}
      />
    </div>
  );
}

export default App;
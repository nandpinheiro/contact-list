function ContactList({ contacts, onEdit, onDelete }) {
  if (contacts.length === 0) return <p>Nenhum contato adicionado.</p>;

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {contacts.map((contact) => (
        <li
          key={contact.id}
          style={{
            border: '1px solid #ccc',
            padding: '10px',
            marginBottom: '8px',
            borderRadius: '4px',
          }}
        >
          <strong>{contact.name}</strong> — {contact.phone}
          <div style={{ marginTop: '5px' }}>
            <button onClick={() => onEdit(contact)} style={{ marginRight: '8px' }}>
              Editar
            </button>
            <button onClick={() => onDelete(contact.id)}>Excluir</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
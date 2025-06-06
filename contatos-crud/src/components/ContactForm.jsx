import { useState, useEffect } from 'react';

function ContactForm({ onSubmit, initialData, clearForm }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setPhone(initialData.phone);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;

    const contact = {
      id: initialData?.id || null,
      name,
      phone,
    };

    onSubmit(contact);
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{ width: '100%', padding: '8px', marginBottom: '8px' }}
      />
      <input
        type="text"
        placeholder="Telefone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        style={{ width: '100%', padding: '8px', marginBottom: '8px' }}
      />
      <button type="submit" style={{ marginRight: '8px' }}>
        {initialData ? 'Atualizar' : 'Adicionar'}
      </button>
      {initialData && (
        <button type="button" onClick={clearForm}>
          Cancelar
        </button>
      )}
    </form>
  );
}

export default ContactForm;
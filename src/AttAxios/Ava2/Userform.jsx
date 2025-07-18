import { useState, useEffect } from 'react';
import './UserForm.css';

const UserForm = ({ onSubmit, selectedUser, clearSelection }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (selectedUser) {
      setName(selectedUser.name);
      setEmail(selectedUser.email);
    } else {
      setName('');
      setEmail('');
    }
  }, [selectedUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;

    onSubmit({ name, email, id: selectedUser?.id });
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{selectedUser ? 'Editar Usuário' : 'Adicionar Usuário'}</h2>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div style={{ display: 'flex', gap: '10px' }}>
        <button type="submit">{selectedUser ? 'Atualizar' : 'Adicionar'}</button>
        {selectedUser && (
          <button type="button" onClick={clearSelection}>
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
};

export default UserForm;

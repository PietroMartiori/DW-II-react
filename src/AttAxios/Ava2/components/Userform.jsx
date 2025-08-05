import { useState, useEffect } from 'react';

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
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2.5 mb-7"
    >
      <h2 className="text-xl font-bold mb-3">
        {selectedUser ? 'Editar Usuário' : 'Adicionar Usuário'}
      </h2>

      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2.5 border border-gray-300 rounded-md"
      />

      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2.5 border border-gray-300 rounded-md"
      />

      <div className="flex gap-2.5">
        <button
          type="submit"
          className="bg-blue-600 text-white p-2.5 rounded-md cursor-pointer hover:bg-blue-800 transition"
        >
          {selectedUser ? 'Atualizar' : 'Adicionar'}
        </button>

        {selectedUser && (
          <button
            type="button"
            onClick={clearSelection}
            className="bg-blue-600 text-white p-2.5 rounded-md cursor-pointer hover:bg-blue-800 transition"
          >
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
};

export default UserForm;

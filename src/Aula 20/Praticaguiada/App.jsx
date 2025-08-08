import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error('Erro na API', err));
  }, []);

  const filtered = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const count = users.reduce((acc, user) => (
    user.name.length > 5 ? acc + 1 : acc
  ), 0);

  return (
    <div className="w-screen h-screen bg-gray-100 flex flex-col p-6">
      <h1 className="text-3xl font-bold mb-6 text-center"> Lista de Usuários</h1>

      <input
        type="text"
        placeholder="Buscar por nome..."
        className="w-full p-3 border border-gray-300 rounded-md mb-6 text-base"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto flex-grow">
        {filtered.map(user => (
          <div
            key={user.id}
            className="bg-white p-6 rounded-lg shadow-sm min-h-[140px] flex flex-col justify-between"
          >
            <div>
              <p className="font-semibold text-xl text-gray-800">{user.name}</p>
              <p className="text-sm text-gray-600 mt-1">{user.email}</p>
              <p className="text-sm text-gray-600"> {user.address.city}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-gray-700 text-base">
         Nomes com mais de 5 letras: <strong>{count}</strong>
      </p>
    </div>
  );
}

export default App;

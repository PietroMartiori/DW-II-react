import { useEffect, useState } from 'react';
import './App.css';
import api from './services/api'
import UserForm from './components/Userform';
import UserList from './components/Userlist';

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get('/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Erro ao carregar usuários:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleAddOrUpdate = (user) => {
    if (user.id) {
      setUsers(users.map(u => (u.id === user.id ? user : u)));
    } else {
      const newUser = { ...user, id: Date.now() };
      setUsers([...users, newUser]);
    }
    setSelectedUser(null);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="container">
      <UserForm
        onSubmit={handleAddOrUpdate}
        selectedUser={selectedUser}
        clearSelection={() => setSelectedUser(null)}
      />
      <UserList
        users={users}
        onDelete={handleDeleteUser}
        onEdit={handleEditUser}
      />
    </div>
  );
};

export default App;

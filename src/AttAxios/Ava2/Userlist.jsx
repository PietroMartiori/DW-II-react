import './UserList.css';

const UserList = ({ users, onDelete, onEdit }) => {
  return (
    <div>
      <h2>Usuários</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <span>{user.name} ({user.email})</span>
            <div>
              <button onClick={() => onEdit(user)}>Editar</button>
              <button onClick={() => onDelete(user.id)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
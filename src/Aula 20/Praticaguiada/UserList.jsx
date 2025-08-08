export default function UserList({ users }) {
  if (users.length === 0) return <p>Nenhum usuário encontrado.</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id} style={{ marginBottom: '10px' }}>
          <strong>{user.name}</strong><br />
          {user.email}<br />
          {user.address.city}
        </li>
      ))}
    </ul>
  );
}

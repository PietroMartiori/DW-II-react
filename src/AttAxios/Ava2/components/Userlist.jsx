const UserList = ({ users, onDelete, onEdit }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Usuários</h2>
      <ul className="list-none p-0">
        {users.map(user => (
          <li
            key={user.id}
            className="bg-[#f9f9f9] mb-[10px] p-[15px] rounded-[5px] flex justify-between items-center"
          >
            <span className="flex-grow">
              {user.name} ({user.email})
            </span>
            <div className="flex">
              <button
                onClick={() => onEdit(user)}
                className="ml-[10px] bg-[#dc3545] text-white border-none px-[12px] py-[6px] rounded-[4px] hover:bg-[#c82333] cursor-pointer"
              >
                Editar
              </button>
              <button
                onClick={() => onDelete(user.id)}
                className="ml-[10px] bg-[#dc3545] text-white border-none px-[12px] py-[6px] rounded-[4px] hover:bg-[#c82333] cursor-pointer"
              >
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

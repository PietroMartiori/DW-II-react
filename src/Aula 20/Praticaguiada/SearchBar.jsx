export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Buscar por nome..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{ padding: '8px', marginBottom: '16px', width: '100%' }}
    />
  );
}

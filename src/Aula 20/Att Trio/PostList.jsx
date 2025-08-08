import React, { useEffect, useState } from 'react';
import { getPosts } from './api';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [busca, setBusca] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts()
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar posts:', error);
        setLoading(false);
      });
  }, []);

  const postsFiltrados = posts.filter(post =>
    post.title.toLowerCase().includes(busca.toLowerCase())
  );

  const total = postsFiltrados.length;

  if (loading) {
    return <p className="text-center text-gray-500">Carregando posts...</p>;
  }

  return (
    <div className="h-full flex flex-col">
      {/* Fixa topo: busca + total */}
      <header className="mb-4 sticky top-0 bg-gray-100 z-10 p-4 rounded shadow">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">Lista de Posts</h2>
        <input
          type="text"
          placeholder="Buscar por título..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="mt-2 text-gray-600 font-semibold">Total de resultados: {total}</p>
      </header>

      {/* Grid dos posts ocupa todo o espaço restante e é scrollável */}
      <main className="flex-grow overflow-y-auto">
        {postsFiltrados.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">Nenhum post encontrado.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {postsFiltrados.map(post => (
              <article
                key={post.id}
                className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h3>
                <p className="text-gray-600">{post.body}</p>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default PostList;

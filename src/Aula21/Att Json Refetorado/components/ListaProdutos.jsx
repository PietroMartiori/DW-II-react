import { useState, useEffect } from "react";
import axios from "axios";

const ListaProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [categoria, setCategoria] = useState("");
  const [editId, setEditId] = useState(null); // Para edição

  // Buscar produtos
  const buscarProdutos = async () => {
    try {
      const res = await axios.get("http://localhost:3001/produtos");
      setProdutos(res.data);
    } catch (err) {
      console.error("Erro ao buscar produtos:", err);
    }
  };

  useEffect(() => {
    buscarProdutos();
  }, []);

  // Adicionar ou atualizar produto
  const salvarProduto = async () => {
    if (!nome.trim() || !preco || !categoria.trim()) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      if (editId !== null) {
        // Editar
        await axios.put(`http://localhost:3001/produtos/${editId}`, {
          nome,
          preco: parseFloat(preco),
          categoria,
        });
        setEditId(null);
      } else {
        // Adicionar
        await axios.post("http://localhost:3001/produtos", {
          nome,
          preco: parseFloat(preco),
          categoria,
        });
      }

      setNome("");
      setPreco("");
      setCategoria("");
      buscarProdutos();
    } catch (err) {
      console.error("Erro ao salvar produto:", err);
    }
  };

  // Preparar edição
  const editarProduto = (produto) => {
    setNome(produto.nome);
    setPreco(produto.preco);
    setCategoria(produto.categoria);
    setEditId(produto.id);
  };

  // Excluir produto
  const excluirProduto = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/produtos/${id}`);
      buscarProdutos();
    } catch (err) {
      console.error("Erro ao excluir produto:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-5xl font-bold text-center text-black mb-10">
        Lista de Produtos
      </h1>

      {/* Form de adicao/edicao */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="border border-gray-300 rounded px-4 py-3 w-64 focus:outline-none focus:ring-2 focus:ring-gray-400 text-lg"
        />
        <input
          type="number"
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          className="border border-gray-300 rounded px-4 py-3 w-32 focus:outline-none focus:ring-2 focus:ring-gray-400 text-lg appearance-none"
        />
        <input
          type="text"
          placeholder="Categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="border border-gray-300 rounded px-4 py-3 w-48 focus:outline-none focus:ring-2 focus:ring-gray-400 text-lg"
        />
        <button
          onClick={salvarProduto}
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-800 transition text-lg"
        >
          {editId !== null ? "Atualizar" : "Adicionar"}
        </button>
      </div>

      {/* Lista de produtos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {produtos.map((produto) => (
          <div
            key={produto.id}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition flex flex-col items-center justify-between"
          >
            <div className="flex flex-col items-center space-y-2 text-center w-full">
              <h2 className="text-2xl font-semibold text-gray-800">{produto.nome}</h2>
              <p className="text-xl text-gray-700">Preço: R$ {produto.preco.toFixed(2)}</p>
              <span className="text-lg text-gray-500">{produto.categoria}</span>
            </div>

            <div className="flex gap-4 mt-4">
              <button
                onClick={() => editarProduto(produto)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                Editar
              </button>
              <button
                onClick={() => excluirProduto(produto.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaProdutos;
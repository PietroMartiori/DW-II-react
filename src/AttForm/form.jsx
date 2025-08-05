import React, { useState } from 'react';
import Botao from './botao';
import './titulo.css';

export default function Form() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nome: ${formData.name}\nEmail: ${formData.email}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-10 rounded-xl max-w-md mx-auto border-2 border-black"
    >
      <h2 className="titulo">Formulário</h2>

      <div className="mb-4">
        <label className="block mb-1 text-black" htmlFor="name">
          Nome:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="text-black w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-black" htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="text-black w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
        />
      </div>

    <Botao type="submit">Enviar</Botao>
    </form>
  );
}

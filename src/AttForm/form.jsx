import React, { useState } from 'react';
import './form.css'; 

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
      className="form-estilo"
      onSubmit={handleSubmit}
    >
      <h2 className="titulo">Formulário</h2>
      <div className="mb-4">
        <label className="nome">
          Nome:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="preebordas"
        />
      </div>
      <div className="mb-4">
        <label className="email">
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="preebordas"
        />
      </div>
      <button
        type="submit"
        className="botao"
      >
        Enviar
      </button>
    </form>
  );
}

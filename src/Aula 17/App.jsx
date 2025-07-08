import { useState } from 'react';
import Irmao1 from './irmao1';
import Irmao2 from './irmao2';

export default function App() { 

  const [mensagem, setMensagem] = useState('');

  return (
    <div style={{ padding: '20px' }}>
      <h1>Aula17</h1> 

      <hr />
      <h2>  Atividade </h2>
      <Irmao1 enviarMensagem={setMensagem} />
      <Irmao2 mensagem={mensagem} />

    </div>

  );
}
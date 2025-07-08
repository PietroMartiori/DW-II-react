import { useContext } from 'react';
import { TemaContext } from './App';

function Pagina() {
    const { tema, alternarTema } = useContext(TemaContext);

    const estilo = {
        backgroundColor: tema === 'claro' ? '#f0f0f0' : '#333',
        color: tema === 'claro' ? '#000' : '#fff',
        padding: '20px',
    };

    return (
        <div style={estilo}>
            <h1>Exemplo: Tema {tema}</h1>
            <button onClick={alterarTema}>Alterar Tema</button>
        </div>
    );
}

export default Pagina;